<?php 

class Documentation 
{
    /**
     * @return string
     */
	public function version() 
	{
		if(!empty(route()->parameters()['version'])) {
			return route()->parameters()['version'];
		}

		return DEFAULT_VERSION;
	}

    /**
     * @return bool|mixed
     */
	public static function getDocVersions()
    {
        return config('versions');
    }
}