# wcNexus
Source code for wcnexus.
<p>wcnexus.com is still under construction, and it is likely to open public in <b>early October</b>.</p>
<p>wcNexus is a non-profit site of personal interest, with apps like blogs, showcases, etc.</p>
<p>This site is powered by Django 1.10.</p>

<p>As Billy the infamous at the neighborhood say he will never give a BDK, however, you can get most of the {B, M, S}DK here that are... 
<br />
<span style='font-size: 5px'>&nbsp;&nbsp;&nbsp;already claimed ha ha ha ha ha</span>

<p>You may now visit the construction site at <a href="http://www.wcnexus.com"  target="_blank">wcnexus.com</a></p>
<p>Please stay safe and always put your safety helmet on! :)</p>

<p>Plus special thanks to opensource project:</p>
<table>
  <thead>
    <tr>
      <td>Project name</td>      <td>Author</td>      <td>Description</td>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td><a href="https://github.com/django/django" target="_blank">Django</a></td>
        <td><a href="https://github.com/django" target="_blank">Django</a></td>
        <td>Django is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.</td>
      </tr>
      <tr>
        <td><a href="https://github.com/jquery/jquery" target="_blank">jQuery</a></td>
        <td><a href="https://github.com/jquery">jQuery Foundation</a></td>
        <td>JavaScript Library</td>
      </tr>
      <tr>
        <td><a href="https://github.com/twbs/bootstrap" target="_blank">Bootstrap</a></td>
        <td><a href="https://github.com/twbs" target="_blank">Bootstrap</a></td>
        <td>Bootstrap is a sleek, intuitive, and powerful front-end framework for faster and easier web development</td>
      </tr>
      <tr>
        <td><a href="https://github.com/FezVrasta/bootstrap-material-design" target="_blank">bootstrap-material-design</a></td>
        <td><a href="https://github.com/FezVrasta" target="_blank">FezVrasta</a></td>
        <td>Material design theme for Bootstrap 3 and 4</td>
      </tr>
      <tr>
        <td><a href="https://github.com/Fantomas42/django-blog-zinnia" target="_blank">django-blog-zinnia</a></td>
        <td><a href="https://github.com/Fantomas42" target="_blank">Fantomas42</a></td>
        <td>Simple yet powerful and really extendable application for managing a blog within your Django Web site.</td>
      </tr>
      <tr>
        <td><a href="https://github.com/desandro/masonry" target="_blank">masonry</a></td>
        <td><a href="https://github.com/desandro" target="_blank">desandro</a></td>
        <td>Cascading grid layout library</td>
      </tr>
  </tbody>
</table>

<h2>How to deploy</h2>
<h3>Warning! If you are using python 3, your <strong>DEBUG</strong> setting <b>MUST Be Turned OFF!!!</b> </h3>
<p>This is because of the implimentaion of magnificent but still not perfect "Zinnia's Weblog". See django-blog-zinnia's <a href='https://github.com/Fantomas42/django-blog-zinnia/issues/484'  target="_blank">Issue #484</a> for more information.</p>

<ol>
	<li>(Skip this if you use default SQLite database) Create a database (eg. wcnexus)</li>
	<li>
		Install dependencies:
		<ul>
			<b>Ubuntu/Debian:</b>
			<li>$ sudo apt-get install python3-dev</li>
			<li>$ sudo apt-get install libjpeg8-dev</li>
			<li>$ sudo apt-get install pillow</li>
			<li>$ pip install Django==1.10</li>
			<li>$ pip install django-avatar</li>
		</ul>
	</li>
	<li>
		Start a django project (eg. wcNexus)
		<ul>
			<li>$ django-admin startproject "(your desired path)/wcNexus"</li>
		</ul>
	</li>
	<li>
		follow the guide to install <a href='https://github.com/Fantomas42/django-blog-zinnia'  target="_blank">django-blog-zinnia</a>
	</li>
	<li>
		In settings.py, you must at least set:
		<ul>
			<li>INSTALLED_APPS = [...'django_comments','mptt','tagging','zinnia','avatar','home','venturer',]</li>
			<li>TEMPLATES = [{...'DIRS': [os.path.join(BASE_DIR,'templates')],...},]</li>
			<li>(Skip this if you use default SQLite database) DATABASES. See <a href="https://docs.djangoproject.com/en/1.10/ref/databases/"  target="_blank">Django Ref doc</a> for more info.</li>
			<li>MEDIA_URL</li>
			<li>MEDIA_ROOT</li>
			<li>STATIC_ROOT</li>
			<li>LOGIN_URL</li>
		</ul>
	</li>
	<li>
		Download this repo. Create the folders yourself if not exist.
	</li>
	<li>
		In your terminal, switch to the root directory, 
		<ul>
			<li>$ python3 manage.py makemigrations</li>
			<li>$ python3 manage.py migrate</li>
		</ul>
	</li>
	<li>Create media folder at root dir</li>
	<li>Create static folder at root dir</li>
	<li>Collect static files</li>
		<ul><li>$ python3 manage.py collectstatic</li></ul>
	<li>Run server (currently only tested in local server).
		<ul><li>$ python3 manage.py runserver --insecure</li></ul>
	</li>
	<li>Visit your site. eg. <a href="http://127.0.0.1:8000"  target="_blank">127.0.0.1:8000 (in default port 8000, change if you wish)</a>, enjoy!</li>
</ol>
