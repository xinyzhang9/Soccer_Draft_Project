import scrapy

from futhead.items import FutheadItem

class FutheadSpider(scrapy.Spider):
	name = "futhead_bio"
	allowed_domains = ["futhead.com"]
	start_urls = [
		"http://www.futhead.com/16/players/?sort=rating&page=1&level=all_nif",
	]
	
	def parse(self,response):
		for href in response.css("td.player > a::attr('href')"):
			url = response.urljoin(href.extract())
			yield scrapy.Request(url,callback = self.parse_dir_contents)
			
	def parse_dir_contents(self,response):
		for sel in response.xpath('//div[@class = "content-box"]'):
			item = FutheadItem()
			item['club'] = response.xpath('.//a[contains(@href,"16/clubs")]/text()').extract()[-1]
			item['league'] = response.xpath('.//a[contains(@href,"16/leagues")]/text()').extract()[-1]
			item['nation'] = response.xpath('.//a[contains(@href,"16/nations")]/text()').extract()[-1]
			yield item
			
			
				

			