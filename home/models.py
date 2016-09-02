from django.db import models

# Create your models here.
class SiteKV(models.Model):
	key = models.CharField(max_length=30)
	value = models.CharField(max_length=50)
	def __str__(self):
		return self.key + " : " + self.value

class SiteHot(models.Model):
	title = models.CharField(max_length=50)
	img = models.CharField(max_length=50)
	link = models.CharField(max_length=100)
	Hot = models.IntegerField()
	def __str__(self):
		return self.title