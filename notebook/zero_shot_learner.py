import warnings
import joblib
import torch
from tqdm import tqdm
from collections import defaultdict
from transformers import AutoTokenizer, AutoModel
from torch.nn import functional as F
warnings.filterwarnings("ignore")


class SentenceBert():
    """
    A common approach to zero shot learning using Sentence-BERT.
    Reference from https://joeddav.github.io/blog/2020/05/29/ZSL.html
    """
    def __init__(self):
        self.device = torch.device("cuda:0" if torch.cuda.is_available() else "cpu")
        self.tokenizer = AutoTokenizer.from_pretrained('deepset/sentence_bert')
        self.model = AutoModel.from_pretrained('deepset/sentence_bert')
        self.model = self.model.to(self.device)
        
    def get_similarity(self, sentence, labels):
        """
        Parameters:
            sentence: str
            label: list
        """
        # Run inputs through model and mean-pool over the sequence dimension to get sequence-level representations
        inputs = self.tokenizer.batch_encode_plus(
            [sentence] + labels,
            return_tensors='pt',
            pad_to_max_length=True)
        input_ids = inputs['input_ids'].to(self.device)
        attention_mask = inputs['attention_mask'].to(self.device)
        with torch.no_grad():
            output = self.model(input_ids, attention_mask=attention_mask)[0]
        sentence_rep = output[:1].mean(dim=1)
        label_reps = output[1:].mean(dim=1)
    
        # Now find the labels with the highest cosine similarities to the sentence
        similarities = F.cosine_similarity(sentence_rep, label_reps)
        closest = similarities.argsort(descending=True)
        
        sim_dict = defaultdict()
        for ind in closest:
            sim_dict[labels[ind]] = (similarities[ind].item())
            
        return sim_dict

def extend_df_with_cos_sim(df, col, labels, sort_by):
    """
    :param df: pandas dataframe
    :param col: str column name
    :param labels: list of string
    :param sort_by: str sort by which column
    :return: df: pandas dataframe
    """
    SB = SentenceBert()
    for index, row in tqdm(df.iterrows(), total=df.shape[0]):
        sim_dict = SB.get_similarity(row[col], labels)
        for i in range(len(labels)):
            df.loc[index, labels[i]] = sim_dict[labels[i]]
    df = df.sort_values(by=sort_by, axis=0, ascending=False)
    df = df.reset_index(drop=True)
    return df

def main():
    df = joblib.load("./data/reuters_news.joblib")
    df = extend_df_with_cos_sim(df, labels=['forex', 'finance', 'stocks'])
    print(df.head())

if __name__ == "__main__":
    main()