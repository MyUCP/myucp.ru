<?php
/*
* MyUCP
*/

class DocumentationController extends Controller 
{
	public function show($version = DEFAULT_VERSION, $page = "installation") 
	{
		//

		$path = app()->resourcesPath('docs' . DIRECTORY_SEPARATOR . $version . DIRECTORY_SEPARATOR . $page . '.md');

		if(!file_exists($path)) {
			return redirect(url('docs.version', ['version' => $version]));
		}

		$documentation = [
			'url' => $page,
			'name' => $page,
			'content' => ext('Markdown')->toHtmlFromFile($path),
		];

		return view("documentation/show", compact('documentation'));
	}
}