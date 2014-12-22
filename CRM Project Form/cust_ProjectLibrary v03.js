/*
	Adam Ip																	2013-08-08
	Depending the value of cust_partner and cust_projecttypedetail to turn on and 
	turn off Tabs on Project form
	
	Adam Ip																	2013-09-20
	Data field ProjectTypeDetails is replaced by cust_productinterest.  
	That introduces lots of extra options.  Option numbers changed.  
	Correct the numbers.
	
	Adam Ip																	2013-11-14
	Verint-SaaS-oQM  832090006 changes to Sky-oQM  279640023
	Verint-SaaS-oRec 832090012 changes to Sky–oREC 279640024
	Verint-SaaS-oWFM 832090013 changes to Sky–oWFM 279640025	
	Verint-SaaS-oWFO 832090014 changes to Sky–oWFO 279640026
	
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
	Verint-oQM  279640006
	Sky-oQM		279640023				
	Verint-oRec 279640007
	Sky–oREC	279640024				
	Verint-oWFM 279640018
	Sky–oWFM	279640025				
	Verint-oWFO 279640005
	Sky–oWFO	279640026				

Verint Channel tab numbers
	Verint-oQM	tab_11
	Sky-oQM 	tab_12 
	Verint-oRec	tab_13
	Sky-oRec	tab_14 
	Verint-oWFM	tab_15
	Sky-oWFM 	tab_16
	Verint-oWFO	tab_17	
	Sky-oWFO 	tab_18


Verint Direct tab numbers
	Verint-oQM 	tab_19
	Sky-oQM 	tab_20 
	Verint-oRec	tab_21
	Sky-oRec	tab_22 
	Verint-oWFM	tab_23
	Sky-oWFM 	tab_24
	Verint-oWFO	tab_25	
	Sky-oWFO 	tab_26
*/
function Project_Tabs_Change()
{
	if( DebugModeProject ) window.alert( "function Project_Tabs_Change" );
	try
	{
		var p = myGetValue( "cust_partner" );
		var t = myGetValue( "cust_productinterest" );
		if( DebugModeProject ) window.alert( "function Project_Tabs_Change\n\tcust_partner, p = " + p + "\n\tcust_productinterest, t = " + t );
		if(( p == 832092203 || p == 832092204 ) && 
			( t == 279640006 || t == 279640023 || t == 279640007 || t == 279640024 || 
			t == 279640018 || t == 279640025 || t == 279640005 || t == 279640026 ))
		{	
			if( p == 832092203 )
			{
				switch( t )
				{
					case 279640006: Show16Tab( 11 ); break;
					case 279640023: Show16Tab( 12 ); break;
					case 279640007: Show16Tab( 13 ); break;
					case 279640024: Show16Tab( 14 ); break;
					case 279640018: Show16Tab( 15 ); break;
					case 279640025: Show16Tab( 16 ); break;
					case 279640005: Show16Tab( 17 ); break;
					case 279640026: Show16Tab( 18 ); break;
					default: Show16Tab( 0 ); break;
				}
			}
			else
			{	/* p equals to 832092204 */
				switch( t )
				{
					case 279640006: Show16Tab( 19 ); break;
					case 279640023: Show16Tab( 20 ); break;
					case 279640007: Show16Tab( 21 ); break;
					case 279640024: Show16Tab( 22 ); break;
					case 279640018: Show16Tab( 23 ); break;
					case 279640025: Show16Tab( 24 ); break;
					case 279640005: Show16Tab( 25 ); break;
					case 279640026: Show16Tab( 26 ); break;	
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
function ProductInterest_OnChange()
{
	if( DebugModeProject ) window.alert( "function ProductInterest_OnChange" );
	try
	{
		Project_Tabs_Change();
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function ProductInterest_OnChange error code " + err );
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
