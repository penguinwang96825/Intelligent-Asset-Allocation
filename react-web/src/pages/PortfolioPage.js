import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MessageDialog from '../components/MessageDialog'
import CreatePortfolioDialog from '../components/CreatePortfolioDialog'
import StockSelectSection from '../views/StockSelectSection'
import PortfolioToolBar from '../components/PortfolioToolBar'
import NewsSection from '../views/NewsSection'
import PerformanceSection from '../views/PerformanceSection'
import WeightSection from '../views/WeightSection'
import Typography from '@material-ui/core/Typography';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { motion } from "framer-motion"
import { BASEURL, NEWS_SECTION, PERFORMANCE_SECTION, WEIGHT_SECTION, COLOR_PALETTES } from '../Constants';

const useStyles = makeStyles((theme) => ({
  portfolioPage: {
    height: 'calc(100% - 56px)',
    [`${theme.breakpoints.up('xs')} and (orientation: landscape)`]: {
      height: 'calc(100% - 48px)',
    },
    [theme.breakpoints.up('sm')]: {
      height: 'calc(100% - 64px)',
    },
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'initial',
    margin: theme.spacing(4, 0, 2),
  },
  portfolioContent: {
    flex: 'auto',
    overflowY: "scroll"
  },
  companyName: {
    margin: theme.spacing(4, 0, 2),
  },
  sideBar: {
    zIndex: 1300,
  },
  backdrop: {
    zIndex: 1600,
    color: '#fff',
  },
}));

function PortfolioPage(props) {
  const classes = useStyles();

  const [companyData, setCompanyData] = React.useState([]);
  const [newsData, setNewsData] = React.useState([]);
  const [companyDataMapping, setCompanyDataMapping] = React.useState({});
  const [userPortfolios, setUserPortfolios] = React.useState([]);
  const [selectedStocks, setPortfolioStocks] = React.useState([]);
  const [dataLoaded, setDataLoaded] = React.useState(false);
  const [isSideBarExpanded, setSideBarExpand] = React.useState(false);
  const [isMessageDialogOpen, setMessageDialogOpen] = React.useState(false);
  const [saveButtonLoading, setSaveButtonLoading] = React.useState(false);
  const [saveButtonDisabled, setSaveButtonDisabled] = React.useState(false);
  const [isCreatePortfolioDialogOpen, setCreatePortfolioDialogOpen] = React.useState(false);
  const [dialogTitle, setDialogTitle] = React.useState("");
  const [dialogMessage, setDialogMessage] = React.useState("");
  const [currentSelectedPortfolio, setCurrentSelectedPortfolio] = React.useState(null);
  const [currentSelectedStock, setCurrentSelectedStock] = React.useState("APPL");
  const [currentSectionCode, setSectionCode] = React.useState(NEWS_SECTION);
  const [portfolioPerformances, setPortfolioPerformance] = React.useState({});
  const [currentPerformance, setCurrentPerformance] = React.useState(0);
  const [portfolioWeights, setPortfolioWeights] = React.useState({});
  const [historyWeights, setHistoryWeights] = React.useState({});
  const [backtestDates, setBacktestDates] = React.useState([]);
  const [selectedModel, setModel] = React.useState("basic");
  const [backdropOpen, setBackdropOpen] = React.useState(false);

  const handleBackdropClose = () => {
    setBackdropOpen(false);
  };
  const handleBackdropToggle = () => {
    setBackdropOpen(!backdropOpen);
  };

  let section = null;

  const sideBarTransitions = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    },
    closed: {
      opacity: 0.5,
      x: '-100%',
      transition: {
        duration: 1.0
      }
    }
  };

  const setSelectedStocks = (stockSymbols) => {
    console.log(stockSymbols);
    console.log(companyDataMapping);
    var stocksDetail = []
    for (var i = 0; i < stockSymbols.length; i++) {
      stocksDetail.push(companyDataMapping[stockSymbols[i]]);
    }
    console.log(stocksDetail);
    setPortfolioStocks(stocksDetail);
  }

  const handleMessageDialogOpen = () => {
    setMessageDialogOpen(true);
  };

  const handleMessageDialogClose = () => {
    setMessageDialogOpen(false);
  };

  const handleCreatePortfolioDialogOpen = () => {
    setCreatePortfolioDialogOpen(true);
  };

  const handleCreatePortfolioDialogClose = () => {
    setCreatePortfolioDialogOpen(false);
  };

  const renderSection = () => {
    switch (currentSectionCode) {
      case NEWS_SECTION:
        return <NewsSection
          newsData={newsData}
        />;
      case PERFORMANCE_SECTION:
        return <PerformanceSection
          portfolioPerformances={portfolioPerformances}
          portfolioWeights={portfolioWeights}
          historyWeights={historyWeights}
          backtestDates={backtestDates}
        />;
      case WEIGHT_SECTION:
        return <WeightSection
          portfolioWeights={portfolioWeights}
          historyWeights={historyWeights}
          backtestDates={backtestDates}
          selectedModel={selectedModel}
          setModel={setModel}
          getWeights={getWeights}
          selectedStocks={selectedStocks}
        />;
      default:
        return <NewsSection newsData={newsData} />;
    }
  };

  const getCompanyData = async () => {
    const request = {
      method: 'GET',
    }

    try {
      console.log("Try to get company data");
      //setLoading(true);
      const response = await fetch(BASEURL + "/company", request)
      if (response.ok) {
        const jsonData = await response.json();
        console.log("Company data:");
        console.log(jsonData);
        if (jsonData.isSuccess) {
          var newCompanyDataMapping = {}
          var newCompanyData = []
          for (var i = 0; i < jsonData.data.length; i++) {
            const companInfo = {
              "companyIndustry": jsonData.data[i].industry,
              "companyName": jsonData.data[i].company_name,
              "companySymbol": jsonData.data[i].symbol,
              "companyId": jsonData.data[i].id_
            };
            newCompanyDataMapping[jsonData.data[i].symbol] = companInfo
            newCompanyData.push(companInfo);
          }
          setCompanyData(newCompanyData);
          setCompanyDataMapping(newCompanyDataMapping);
        } else {
          alert(jsonData.errorMsg);
        }
      }
    }
    catch (err) {
      console.log('Fetch company data failed', err);
    }
    finally {
      //setLoading(false);
    }
  };

  const generateDataTemplate = (index) => {
    return {
      label: '',
      fill: false,
      lineTension: 0.1,
      backgroundColor: COLOR_PALETTES[index],
      borderColor: COLOR_PALETTES[index],
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: COLOR_PALETTES[index],
      pointBackgroundColor: '#fff',
      pointBorderWidth: 0,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: COLOR_PALETTES[index],
      pointHoverBorderColor: COLOR_PALETTES[index],
      pointHoverBorderWidth: 2,
      pointRadius: 0,
      pointHitRadius: 5,
      data: []
    }
  }

  const setWeightDataset = (symbols, weight, date) => {
    var newHistoryDatasets = [];
    var currentWeights = [];
    var weightLabels = [];
    var currentWeightColors = [];

    var maxVal = 42;
    var delta = Math.floor(date.length / maxVal);
    var lesserDate = [];

    for (var i = 0; i < weight.length; i++) {
      var dataset = generateDataTemplate(i);
      const originalData = weight[i].slice(1);
      var lesserData = [];
      for (var j = 0; j < originalData.length; j = j + delta) {
        lesserData.push(originalData[j]);
        if (i === 0) {
          lesserDate.push(date[j]);
        }
      }

      dataset.data = lesserData;
      dataset.label = symbols[i];

      const latestWeight = weight[i][weight[i].length - 1];
      weightLabels.push(symbols[i] + ": " + latestWeight + "%");
      currentWeights.push(latestWeight);
      currentWeightColors.push(COLOR_PALETTES[i]);
      newHistoryDatasets.push(dataset);
    }

    var newHistoryWeightData = {
      labels: lesserDate,
      datasets: newHistoryDatasets
    }

    var newCurrentWeightData = {
      labels: weightLabels,
      datasets: [{
        data: currentWeights,
        backgroundColor: currentWeightColors,
        hoverBackgroundColor: currentWeightColors
      }]
    }
    console.log(newCurrentWeightData);
    console.log(newHistoryWeightData);
    setPortfolioWeights(newCurrentWeightData);
    setHistoryWeights(newHistoryWeightData);
  }

  const setPerformanceDataset = (performance, date) => {
    var maxVal = 42;
    var delta = Math.floor(date.length / maxVal);
    var lesserDate = [];
    var lesserData = [];
    var dataset = generateDataTemplate(0);
    const originalData = performance.slice(1);

    for (var i = 0; i < performance.length; i = i + delta) {
      lesserData.push(originalData[i]);
      lesserDate.push(date[i]);
    }

    dataset.label = "History performance";
    dataset.data = lesserData;

    var newPerformanceData = {
      labels: lesserDate,
      datasets: [dataset]
    }

    console.log(newPerformanceData);
    console.log(originalData[originalData.length - 1]);
    setCurrentPerformance(originalData[originalData.length - 1]);
    setPortfolioPerformance(newPerformanceData);
  }

  const getWeights = async (selectedModel, selectedStocks) => {
    var model = selectedModel;
    if (model == undefined) {
      model = "basic";
    }
    var companySymbols = selectedStocks.map(function (item, index, array) {
      return item.companySymbol;
    });

    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "stocks": companySymbols,
        "model": model
      })
    }

    try {
      if (companySymbols.length > 0) {
        console.log("Try to get weights");
        handleBackdropToggle();
        const response = await fetch(BASEURL + "/portfolio/test", request)
        if (response.ok) {
          const jsonData = await response.json();
          console.log("Weight response")
          console.log(jsonData)
          if (jsonData.isSuccess) {
            setPerformanceDataset(jsonData.data.all_values, jsonData.data.date);
            setWeightDataset(companySymbols, jsonData.data.all_weights, jsonData.data.date);
            setBacktestDates(jsonData.data.date);
          } else {
            alert(jsonData.errorMsg);
          }
        }
      }
    }
    catch (err) {
      console.log('Fetch news failed', err);
    }
    finally {
      handleBackdropClose();
    }
  };

  const getNews = async (selectedStocks) => {
    var companyNames = selectedStocks.map(function (item, index, array) {
      return item.companyName;
    });

    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "companyNames": companyNames,
      })
    }

    try {
      if (companyNames.length > 0) {
        console.log("Try to get news");
        //setLoading(true);
        const response = await fetch(BASEURL + "/news", request)
        if (response.ok) {
          const jsonData = await response.json();
          if (jsonData.isSuccess) {
            var newNewsData = [];
            for (var i = 0; i < jsonData.data.length; i++) {
              var paragraphs = [];
              for (var j = 0; j < jsonData.data[i].paragraph.length; j++) {
                var paragraph = {
                  "isKeySentence": false,
                  "text": jsonData.data[i].paragraph[j]
                };
                paragraphs.push(paragraph);
              }
              for (var j = 0; j < jsonData.data[i].keysent.length; j++) {
                paragraphs[jsonData.data[i].keysent[j]]["isKeySentence"] = true;
              }
              var dt = new Date(jsonData.data[i].date)
              var news = {
                "date": dt.getFullYear() + "/" + (dt.getMonth() + 1) + "/" + dt.getDate(),
                "companyName": jsonData.data[i].company,
                "paragraph": paragraphs,
                "title": jsonData.data[i].title,
                "id": jsonData.data[i].id,
              };
              newNewsData.push(news);
            }
            console.log(newNewsData);
            setNewsData(newNewsData)
          } else {
            alert(jsonData.errorMsg);
          }
        }
      }
    }
    catch (err) {
      console.log('Fetch news failed', err);
    }
    finally {
      //setLoading(false);
    }
  };

  const createNewPortfolio = async (portfolioName) => {
    const request = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "portfolioName": portfolioName,
        "userId": props.userData.userId,
      })
    }
    try {
      const response = await fetch(BASEURL + "/portfolio/create", request)
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
        if (jsonData.isSuccess) {
          // get create object
          var newPortfolio = {
            "portfolioId": jsonData.data.id,
            "userId": jsonData.data.user_id,
            "portfolioName": jsonData.data.portfolio_name,
            "portfolioStocks": jsonData.data.portfolio_stocks
          }
          setUserPortfolios([...userPortfolios, newPortfolio]);
          handleCreatePortfolioDialogClose();
        } else {
          alert(jsonData.errorMsg);
        }
      }
    }
    catch (err) {
      alert('create new portfolio failed', err);
    }
  }

  const getUserPortfolio = async () => {
    if (props.userData.userId != undefined) {
      const request = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          "userId": props.userData.userId,
        })
      }
      try {
        console.log("Try to get user portfolio data");
        //setLoading(true);
        const response = await fetch(BASEURL + "/portfolio", request)
        if (response.ok) {
          const jsonData = await response.json();
          console.log(jsonData);
          if (jsonData.isSuccess) {
            // Get portfolio success
            setDataLoaded(true);
            if (jsonData.data.length > 0) {
              // If user have portfolios
              var newPortfolios = []
              for (var i = 0; i < jsonData.data.length; i++) {
                var newPortfolio = {
                  "portfolioId": jsonData.data[i].id,
                  "userId": jsonData.data[i].user_id,
                  "portfolioName": jsonData.data[i].portfolio_name,
                  "portfolioStocks": jsonData.data[i].portfolio_stocks,
                };
                newPortfolios.push(newPortfolio);
              }
              setUserPortfolios(newPortfolios);
            } else {
              // If user don't have portfolios
              // Create default one

            }
          } else {
            // Get portfolio failed
            alert(jsonData.errorMsg);
            setDataLoaded(false);
          }
        }
      }
      catch (err) {
        setDataLoaded(false);
        console.log('Fetch company data failed', err);
      }
      finally {
        //setLoading(false);
      }
    }
  };

  const savePortfolio = async () => {
    if (props.userData.userId != undefined) {
      var currentPortfolioStocks = selectedStocks.map(function (item, index, array) {
        return item.companySymbol;
      });
      console.log(currentPortfolioStocks);
      const request = {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'portfolioId': currentSelectedPortfolio,
          'portfolioStocks': currentPortfolioStocks
        })
      }
      try {
        console.log("Try to save portfolio: " + currentSelectedPortfolio);
        console.log(request);
        setSaveButtonLoading(true);
        const response = await fetch(BASEURL + "/portfolio/save", request)
        if (response.ok) {
          const jsonData = await response.json();
          if (jsonData.isSuccess) {

            var tempNewPortfolios = Array.from(userPortfolios);
            tempNewPortfolios.forEach(function (item, index, array) {
              if (item.portfolioId == currentSelectedPortfolio) {
                item.portfolioStocks = currentPortfolioStocks;
              }
            });
            console.log(tempNewPortfolios);
            setUserPortfolios(tempNewPortfolios);
            setDialogTitle("Success")
            setDialogMessage("Portfolio has been updated!");
            handleMessageDialogOpen();
          } else {
            alert(jsonData.errorMsg);
          }
        }
      }
      catch (err) {
        console.log('Fetch company data failed', err);
      }
      finally {
        setSaveButtonLoading(false);
      }
    } else if (props.userData.userId == undefined) {
      setDialogMessage("Please login first");
      handleMessageDialogOpen();
    } else if (currentSelectedPortfolio == undefined) {
      setDialogMessage("Create portfolio first");
      handleMessageDialogOpen();
    }
  };

  React.useEffect(() => {
    console.log(currentSectionCode)
  }, [currentSectionCode]);

  React.useEffect(() => {
    if (!dataLoaded) {
      getCompanyData();
    }
    if (props.userData.userId !== undefined) {
      getUserPortfolio();
    }
  }, [props.userData]);

  React.useEffect(() => {
    if (userPortfolios.length > 0 && currentSelectedPortfolio == undefined) {
      setCurrentSelectedPortfolio(userPortfolios[0].portfolioId);
      setSelectedStocks(userPortfolios[0].portfolioStocks);
    }
  }, [userPortfolios]);

  React.useEffect(() => {
    console.log('newssection');
    if (selectedStocks != undefined && selectedStocks.length > 0) {
      console.log('getNews');

      getNews(selectedStocks);
      getWeights(selectedModel, selectedStocks);
    }
  }, [selectedStocks]);

  return (
    <div className={classes.portfolioPage}>
      <Backdrop className={classes.backdrop} open={backdropOpen} onClick={handleBackdropClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <MessageDialog
        isOpen={isMessageDialogOpen}
        handleClose={handleMessageDialogClose}
        title={dialogTitle}
        message={dialogMessage}
      >
      </MessageDialog>
      <CreatePortfolioDialog
        isOpen={isCreatePortfolioDialogOpen}
        handleClose={handleCreatePortfolioDialogClose}
        userPortfolios={userPortfolios}
        setUserPortfolios={setUserPortfolios}
        setCurrentSelectedPortfolio={setCurrentSelectedPortfolio}
        createNewPortfolio={createNewPortfolio}
        userData={props.userData}
      >
      </CreatePortfolioDialog>
      <PortfolioToolBar
        selectedStocks={selectedStocks}
        setSelectedStocks={setSelectedStocks}
        companyData={companyData}
        setDialogTitle={setDialogTitle}
        setDialogMessage={setDialogMessage}
        isSideBarExpanded={isSideBarExpanded}
        setSideBarExpand={setSideBarExpand}
        openMessageDialog={handleMessageDialogOpen}
        userPortfolios={userPortfolios}
        setUserPortfolios={setUserPortfolios}
        currentSelectedPortfolio={currentSelectedPortfolio}
        setCurrentSelectedPortfolio={setCurrentSelectedPortfolio}
        handleCreatePortfolioDialogOpen={handleCreatePortfolioDialogOpen}
        userData={props.userData}
        setSectionCode={setSectionCode}
      >
      </PortfolioToolBar>
      <motion.div
        className={classes.sideBar}
        initial={'closed'}
        animate={isSideBarExpanded ? "open" : "closed"}
        variants={sideBarTransitions}
      >
        <StockSelectSection
          selectedStocks={selectedStocks}
          setSelectedStocks={setSelectedStocks}
          currentSelectedStock={currentSelectedStock}
          setCurrentSelectedStock={setCurrentSelectedStock}
          savePortfolio={savePortfolio}
          saveButtonLoading={saveButtonLoading}
          saveButtonDisabled={saveButtonDisabled}
        >
        </StockSelectSection>
      </motion.div>
      <Grid item container direction="row" justify="center" alignItems="stretch" className={classes.portfolioContent}>
        <Grid item xs={10} md={6}>
          {renderSection()}
        </Grid>
      </Grid>
    </div>
  );
}

export default PortfolioPage;
