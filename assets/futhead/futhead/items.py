# -*- coding: utf-8 -*-

# Define here the models for your scraped items
#
# See documentation in:
# http://doc.scrapy.org/en/latest/topics/items.html

import scrapy


class FutheadItem(scrapy.Item):
    alias = scrapy.Field()
    position = scrapy.Field()
    rating = scrapy.Field()
    nation = scrapy.Field()
    league = scrapy.Field()
    club = scrapy.Field()
    pace = scrapy.Field()
    shooting = scrapy.Field()
    passing = scrapy.Field()
    dribbling= scrapy.Field()
    defending= scrapy.Field()
    physical= scrapy.Field()
    id = scrapy.Field()
    img_nation = scrapy.Field()
    img_club = scrapy.Field()
    img_player = scrapy.Field()
    
    name = scrapy.Field()
    age = scrapy.Field()
    height = scrapy.Field()
    workrates = scrapy.Field()
    traits = scrapy.Field()
    specialities = scrapy.Field()
    
    # skills = scrapy.Field()
    acceleration = scrapy.Field()
    sprint_speed = scrapy.Field()
    agility = scrapy.Field()
    balance = scrapy.Field()
    reactions = scrapy.Field()
    ball_control = scrapy.Field()
    dribbling_skill = scrapy.Field()
    positioning = scrapy.Field()
    finishing = scrapy.Field()
    shot_power = scrapy.Field()
    long_shots = scrapy.Field()
    volleys = scrapy.Field()
    penalties = scrapy.Field()
    interceptions = scrapy.Field()
    heading = scrapy.Field()
    marking = scrapy.Field()
    standing_tackle = scrapy.Field()
    sliding_tackle = scrapy.Field()
    vision = scrapy.Field()
    crossing = scrapy.Field()
    free_kick = scrapy.Field()
    short_passing = scrapy.Field()
    long_passing = scrapy.Field()
    curve = scrapy.Field()
    jumping = scrapy.Field()
    stamina = scrapy.Field()
    strength = scrapy.Field()
    aggression = scrapy.Field()
    
class FutheadItem_gk(scrapy.Item):
	alias = scrapy.Field()
	position = scrapy.Field()
	rating = scrapy.Field()
	nation = scrapy.Field()
	league = scrapy.Field()
	club = scrapy.Field()
	dive = scrapy.Field()
	hand = scrapy.Field()
	kick = scrapy.Field()
	reflex= scrapy.Field()
	speed= scrapy.Field()
	pos= scrapy.Field()
	id = scrapy.Field()
	img_nation = scrapy.Field()
	img_club = scrapy.Field()
	img_player = scrapy.Field()	
	name = scrapy.Field()
	age = scrapy.Field()
	height = scrapy.Field()
	workrates = scrapy.Field()
	traits = scrapy.Field()



    
    
