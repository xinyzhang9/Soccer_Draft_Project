import scrapy

from futhead.items import FutheadItem

class FutheadSpider(scrapy.Spider):
	name = "futhead_basic"
	allowed_domains = ["futhead.com"]
	start_urls = [
		"http://www.futhead.com/16/players/?sort=rating&page=1&level=all_nif",
	]
	
	def parse(self,response):
		for href in response.css("td.player > a::attr('href')"):
			url = response.urljoin(href.extract())
			yield scrapy.Request(url,callback = self.parse_dir_contents)
			
	def parse_dir_contents(self,response):
		for sel in response.xpath('//div[@class = "playercard fut16 card-large nif gold"]'):
			item = FutheadItem()
			item['id']
			item['name'] = sel.xpath('.//div[@class = "playercard-name"]/text()').extract()
			item['position'] = sel.xpath('.//div[@class = "playercard-position"]/text()').extract()
			item['rating'] = sel.xpath('.//div[@class = "playercard-rating"]/text()').extract()
			item['pace'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr1"]/text()').extract()
			item['shooting'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr2"]/text()').extract()
			item['passing'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr3"]/text()').extract()
			item['dribbling'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr4"]/text()').extract()
			item['defending'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr5"]/text()').extract()
			item['physical'] = sel.xpath('.//div[@class = "playercard-attr playercard-attr6"]/text()').extract()
			yield item
			
			
				

			