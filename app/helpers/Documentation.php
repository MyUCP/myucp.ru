<?php 

class Documentation 
{
	public function version() 
	{
		if(!empty(route()->parameters()['version'])) {
			return route()->parameters()['version'];
		}

		return DEFAULT_VERSION;
	}

	public static function getDocVersions()
    {
        return [
            'master' => 'Master',
            '5.6' => '5.6',
            '5.5' => '5.5',
            '5.4' => '5.4',
        ];
    }
}