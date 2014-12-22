/*
	Adam Ip																	2013-08-08
	Depending the value of cust_partner and cust_projecttypedetail to turn on and 
	turn off Tabs on Project form
*/	

var DebugModeProject = false;  

/***************************************************************************************/
/* If show_me is zero or is not 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 
	24, 25, 26, then all sixteen tabs 1..8 will be invisible, i.e. false 
	Otherwise, only the show_me tab will set to visible; all others set to invisible */
function Show16Tab( show_me )
{
	if( DebugModeProject ) window.alert( "function Show16Tab\n\tshow_me = " + show_me );

	try
	{
		var i, max_num_tabs = 26; /* 26 = total number of item 16 + base number 10 */	
		
		/* if show_me is not within 11..26, then hide all 16 tabs */
		if( show_me < 11 || max_num_tabs < show_me )	
		{
			for( i = 11; i <= max_num_tabs; i++ )
				HideOneTab( "tab_" + i.toString());
		}	
		else
		{	/* show show_me tab and hide all other 15 tabs */
			for( i = 11; i <= max_num_tabs; i++ )
				if( i == show_me )
					ShowOneTab( "tab_" + i.toString());
				else
					HideOneTab( "tab_" + i.toString());
		}		
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function Show16Tab error code = " + err );
	}
}


/***************************************************************************************/
/*
Partner, cust_partner, option set values
	Verint Channel 832092203
	Verint Direct  832092204

cust_projecttypedetail option set values
	Verint-oQM  			832090002
	Verint-SaaS-oQM  		832090006
	Verint-oRec 			832090005
	Verint-SaaS-oRec 		832090012
	Verint-oWFM 			832090003
	Verint-SaaS-oWFM 		832090013
	Verint-oWFO 			832090004
	Verint-SaaS-oWFO 		832090014

Verint Channel tab numbers
	Verint-oQM  		tab_11
	Verint-SaaS-oQM 	tab_12 
	Verint-oRec 		tab_13
	Verint-SaaS-oRec	tab_14 
	Verint-oWFM 		tab_15
	Verint-SaaS-oWFM 	tab_16
	Verint-oWFO 		tab_17	
	Verint-SaaS-oWFO 	tab_18


Verint Direct tab numbers
	Verint-oQM  		tab_19
	Verint-SaaS-oQM 	tab_20 
	Verint-oRec 		tab_21
	Verint-SaaS-oRec	tab_22 
	Verint-oWFM 		tab_23
	Verint-SaaS-oWFM 	tab_24
	Verint-oWFO 		tab_25	
	Verint-SaaS-oWFO 	tab_26
*/
function Project_Tabs_Change()
{
	if( DebugModeProject ) window.alert( "function Project_Tabs_Change" );
	try
	{
		var p = myGetValue( "cust_partner" );
		var t = myGetValue( "cust_projecttypedetail" );
		if( DebugModeProject ) window.alert( "function Project_Tabs_Change\n\tp = " + p + "\n\tt = " + t );
		if(( p == 832092203 || p == 832092204 ) && (( t >= 832090002 && t <= 832090006 ) || ( t >= 832090012 && t <= 832090014 )))
		{	
			if( p == 832092203 )
			{
				switch( t )
				{
					case 832090002: Show16Tab( 11 ); break;
					case 832090006: Show16Tab( 12 ); break;
					case 832090005: Show16Tab( 13 ); break;
					case 832090012: Show16Tab( 14 ); break;
					case 832090003: Show16Tab( 15 ); break;
					case 832090013: Show16Tab( 16 ); break;
					case 832090004: Show16Tab( 17 ); break;
					case 832090014: Show16Tab( 18 ); break;
					default: Show16Tab( 0 ); break;
				}
			}
			else
			{	/* p equals to 832092204 */
				switch( t )
				{
					case 832090002: Show16Tab( 19 ); break;
					case 832090006: Show16Tab( 20 ); break;
					case 832090005: Show16Tab( 21 ); break;
					case 832090012: Show16Tab( 22 ); break;
					case 832090003: Show16Tab( 23 ); break;
					case 832090013: Show16Tab( 24 ); break;
					case 832090004: Show16Tab( 25 ); break;
					case 832090014: Show16Tab( 26 ); break;	
					default: Show16Tab( 0 ); break;		
				}	
			}	
		}
		else
			Show16Tab( 0 ); 
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function Project_Tabs_Change error code " + err );
	}
}

/***************************************************************************************/
function Partner_OnChange()
{
	if( DebugModeProject ) window.alert( "function Partner_OnChange" );
	try
	{
		Project_Tabs_Change();
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function Partner_OnChange error code " + err );
	}

}


/***************************************************************************************/
function ProjectTypeDetail_OnChange()
{
	if( DebugModeProject ) window.alert( "function ProjectTypeDetail_OnChange" );
	try
	{
		Project_Tabs_Change();
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function ProjectTypeDetail_OnChange error code " + err );
	}

}


/***************************************************************************************/
function ProjectForm_OnLoad()
{
	if( DebugModeProject ) window.alert( "function ProjectForm_OnLoad" );
	try
	{
		Project_Tabs_Change();
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function ProjectForm_OnLoad error code " + err );
	}

}

/* End Of Lines ************************************************************************/
