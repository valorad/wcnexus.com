from django.conf.urls import url
from . import views

from zinnia.views.authors import AuthorDetail

app_name = "venturer"
urlpatterns = [
	#list
	# url(r'^$', views.venturerSelf, name='View_Own_Profile'),
	url(r'^(?P<venturerName>[\w]+)/$', views.loadVenturer, name='View_a_Profile'),
	url(r'^(?P<venturerName>[\w]+)/VCate/(?P<viewCate>[\w]+)$', views.loadBHeaderAjax, name='View_a_Profile_Specifing_Cate'),
	url(r'^(?P<username>[.+-@\w]+)/VAuthor/$', AuthorDetail.as_view(), name='author_detail'),
]