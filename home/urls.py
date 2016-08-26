from django.conf.urls import url
from . import views

app_name = "home"
urlpatterns = [
	#list
	url(r'^$', views.home, name='HomePage'),
	# url(r'^login/(?P<isAjax>.+)/$', views.log_me_in, name='Login'),
	url(r'^login/$', views.log_me_in, name='Login'),
	url(r'^logout/$', views.log_me_out, name='Logout'),
	url(r'^loginFull/$', views.log_Page, name='Full_Login'),
	url(r'^loginForm/$', views.loginFull, name='login_Form'),
	url(r'^loadAjaxAvatar/$', views.loadAjaxAvatar, name='load_Avatar_in_AJAX'),
	# url(r'^setlang/$', views.get_language_info_list, name='languageset'),
	# url(r'^pertest$', views.pertest, name='pertest'),
]