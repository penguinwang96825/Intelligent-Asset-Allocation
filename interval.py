# to update daily or weekly
from flask import Blueprint, jsonify, abort, request, render_template, send_from_directory
from database.tables.user import User
from database.tables.company import Company, save_company
from database.database import db
from database.tables.company import output_news, news_to_json
from database.tables.company import CrawlingData, daily_update
from database.tables.user import User

def interval():
	daily_update()
	


