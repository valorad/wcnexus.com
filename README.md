# wcNexus
Source code for wcnexus.
<p>wcnexus.com is still under construction, and it is likely to open public in <b>late September</b>.</p>
<p>wcNexus is a non-profit site of personal interest, with apps like blogs, showcases, etc.</p>
<p>This site is powered by Django 1.10.</p>

<p>As Billy the infamous at the neighborhood say he will never give a BDK, however, you can get most of the {B, M, S}DK here that are... 
<del><br />
<span style='font-size: 5px'>&nbsp;&nbsp;&nbsp;already claimed ha ha ha ha ha</span>
</del>
<p>You may now visit the construction site at <a href="http://www.wcnexus.com">wcnexus.com</a></p>
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
  </tbody>
</table>

<h2>How to deploy</h2>
<ol>
	<li>Create a database (eg. wcnexus)</li>
	<li>
		install dependencies:
		<ul>
			<b>Ubuntu/Debian:</b>
			<li>$ sudo apt-get install libjpeg8-dev</li>
			<li>$ sudo apt-get install pillow</li>
			<li>$ pip install Django==1.10</li>
			<li>$ pip install django-avatar</li>
		</ul>
	</li>
	<li>
		start a django project (eg. wcNexus)
		<ul>
			<li>$ django-admin startproject "(your desired path)/wcNexus"</li>
		</ul>
	</li>
	<li>
		in settings.py, you must at least set:
		<ul>
			<li>INSTALLED_APPS = [...'avatar','home',]</li>
			<li>TEMPLATES = [{...'DIRS': [os.path.join(BASE_DIR,'templates')],...},]</li>
			<li>MEDIA_URL</li>
			<li>MEDIA_ROOT</li>
			<li>LOGIN_URL</li>
		</ul>
	</li>
	<li>
		comment out or remove all python files in all apps except <strong>models.py</strong>.
	</li>
	<li>
		in your terminal, switch to the repo root directory, 
		<ul>
			<li>$ python3 manage.py makemigrations</li>
			<li>$ python3 manage.py migrate</li>
		</ul>
	</li>
	<li>undo the changes in those py files (comment back or recover)</li>
	<li>run server(either in your apache, ngnix, or django manage.py). For the latter:
		<ul><li>$ python3 manage.py runserver</li></ul>
	</li>
	<li>Visit <a href="http://127.0.0.1:8000">127.0.0.1:8000(in default port 8000, change if you wish)</a>, enjoy!</li>
</ol>
