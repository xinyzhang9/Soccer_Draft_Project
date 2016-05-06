import scrapy

from futhead.items import FutheadItem_gk

class FutheadSpider(scrapy.Spider):
	name = "futhead_gk"
	allowed_domains = ["futhead.com"]
	start_urls = []
	for j in range(1,33):
		myurl = "http://www.futhead.com/16/players/?group=gk&page=%d&level=all_nif" % j
		start_urls.append(myurl)
	print start_urls
	i = 1
	
	def parse(self,response):
		for href in response.css("td.player > a::attr('href')"):
			url = response.urljoin(href.extract())
			yield scrapy.Request(url,callback = self.parse_dir_contents)
			
	def parse_dir_contents(self,response):
		
		for sel in response.xpath('//div[@class ="playercard fut16 card-large nif bronze non-rare"]'):
			item = FutheadItem_gk()
			item['id']=self.i
			item['alias'] = sel.xpath('.//div[@class = "playercard-name"]/text()').extract()
			item['position'] = sel.xpath('.//div[@class = "playercard-position"]/text()').extract()
			item['rating'] = sel.xpath('.//div[@class = "playercard-rating"]/text()').extract()
			item['club'] = response.xpath('//a[contains(@href,"16/clubs")]/text()').extract()[-1]
			item['league'] = response.xpath('//a[contains(@href,"16/leagues")]/text()').extract()[-1]
			item['nation'] = response.xpath('//a[contains(@href,"16/nations")]/text()').extract()[-1]
			
			item['dive'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr1"]/text()').extract()
			item['hand'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr2"]/text()').extract()
			item['kick'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr3"]/text()').extract()
			item['reflex'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr4"]/text()').extract()
			item['speed'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr5"]/text()').extract()
			item['pos'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr6"]/text()').extract()

			item['img_nation'] = sel.css('img').xpath('@src').extract()[0]
			item['img_club'] = sel.css('img').xpath('@src').extract()[1]
			item['img_player'] = sel.css('img').xpath('@src').extract()[-1]
			
			info = response.xpath('//table[@class = "table table-striped table-condensed table-borderless"]//td//text()').extract()
			item['name'] = info[0]
			item['age'] = info[14]
			item['height'] = info[16]
			item['workrates'] = info[18]
			if(len(info)>=21):
				item['traits'] = info[21]
			else:
				item['traits'] = "null"			
			
			yield item

		self.i +=1
			
			
				

			