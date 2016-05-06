import scrapy

from futhead.items import FutheadItem

class FutheadSpider(scrapy.Spider):
	name = "futhead"
	allowed_domains = ["futhead.com"]
	start_urls = []
	for j in range(1,39):
		myurl = "http://www.futhead.com/16/players/?sort=rating&page=%d&level=all_nif" % j
		start_urls.append(myurl)
	print start_urls
	i = 1
	
	def parse(self,response):
		for href in response.css("td.player > a::attr('href')"):
			url = response.urljoin(href.extract())
			yield scrapy.Request(url,callback = self.parse_dir_contents)
			
	def parse_dir_contents(self,response):
		
		for sel in response.xpath('//div[@class ="playercard fut16 card-large nif gold"]'):
			item = FutheadItem()
			item['id']=self.i
			item['alias'] = sel.xpath('.//div[@class = "playercard-name"]/text()').extract()
			item['position'] = sel.xpath('.//div[@class = "playercard-position"]/text()').extract()
			item['rating'] = sel.xpath('.//div[@class = "playercard-rating"]/text()').extract()
			item['club'] = response.xpath('//a[contains(@href,"16/clubs")]/text()').extract()[-1]
			item['league'] = response.xpath('//a[contains(@href,"16/leagues")]/text()').extract()[-1]
			item['nation'] = response.xpath('//a[contains(@href,"16/nations")]/text()').extract()[-1]
			
			item['img_nation'] = sel.css('img').xpath('@src').extract()[0]
			item['img_club'] = sel.css('img').xpath('@src').extract()[1]
			item['img_player'] = sel.css('img').xpath('@src').extract()[-1]
			
			info = response.xpath('//table[@class = "table table-striped table-condensed table-borderless"]//td//text()').extract()
			item['name'] = info[0]
			item['age'] = info[14]
			item['height'] = info[16]
			item['workrates'] = info[18]
			if(len(info) >= 21):
				item['traits'] = info[21]
			else:
				item['traits'] = "null"
			if(len(info) >= 24):
				item['specialities'] = info[24]
			else:
				item['specialities'] = "null"
			
			skills = response.xpath('//div[@class = "list-group list-igs"]//div//text()').extract()
			item['pace'] = skills[0]
			item['acceleration'] = skills[1]
			item['sprint_speed'] = skills[2]
			item['dribbling'] = skills[3]
			item['agility'] = skills[4]
			item['balance'] = skills[5]
			item['reactions'] = skills[6]
			item['ball_control'] = skills[7]
			item['dribbling_skill'] = skills[8]
			item['shooting'] = skills[9]
			item['positioning'] = skills[10]
			item['finishing'] = skills[11]
			item['shot_power'] = skills[12]
			item['long_shots'] = skills[13]
			item['volleys'] = skills[14]
			item['penalties'] = skills[15]
			item['defending'] = skills[16]
			item['interceptions'] = skills[17]
			item['heading'] = skills[18]
			item['marking'] = skills[19]
			item['standing_tackle'] = skills[20]
			item['sliding_tackle'] = skills[21]
			item['passing'] = skills[22]
			item['vision'] = skills[23]
			item['crossing'] = skills[24]
			item['free_kick'] = skills[25]
			item['short_passing'] = skills[26]
			item['long_passing'] = skills[27]
			item['curve'] = skills[28]
			item['physical'] = skills[29]
			item['jumping'] = skills[30]
			item['stamina'] = skills[31]
			item['strength'] = skills[32]
			item['aggression'] = skills[33]
			yield item

		self.i +=1
			
			
				

			