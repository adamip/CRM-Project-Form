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
	
	Adam Ip																	2013-12-13	
	function EnableEstiamted()
	
	Adam Ip																	2013-12-15	
	function ToSetDefault()
	
	Adam Ip																	2014-04-29	
	function EnableOrderStatusTab()

	Adam Ip																	2014-05-28	
	function ProjectForm_OnLoad()

	*/	

var gdf = [
	[ "cust_estverintchannelverint_oqm_pm", "cust_estverintchannelverint_oqm_se", "cust_estverintchannelverint_oqm_wfmse", 
	  "cust_estverintchannelverint_oqm_solndesign", "cust_estverintchannelverint_oqm_psesi", "cust_estverintchannelverint_oqm_trainvln",
	  "cust_estverintchannelverint_oqm_trainadtech", "cust_estverintchannelverint_oqm_appconsulting", 
      4, 8, 1, 0.5, 3, 5, 1, 1 ],
	[ "cust_estverintchannelsky_oqm_pm", "cust_estverintchannelsky_oqm_se", "cust_estverintchannelsky_oqm_wfmse",
      "cust_estverintchannelsky_oqm_solndesign", "cust_estverintchannelsky_oqm_psesi", "cust_estverintchannelsky_oqm_trainvln",
      "cust_estverintchannelsky_oqm_trainadtech", "cust_estverintchannelsky_oqm_appconsulting",
      3, 4, 1, 0.5, 1.5, 5, 1, 0 ],
	[ "cust_estverintchannelverint_orec_pm", "cust_estverintchannelverint_orec_se", "cust_estverintchannelverint_orec_wfmse",
      "cust_estverintchannelverint_orec_solndesign", "cust_estverintchannelverint_orec_psesi", "cust_estverintchannelverint_orec_trainvln",
      "cust_estverintchannelverint_orec_trainadtech", "cust_estverintchannelverint_orec_appconsulting",
	  3, 4, 0, 0.5, 2, 2, 0, 1 ],
	[ "cust_estverintchannelsky_orec_pm", "cust_estverintchannelsky_orec_se", "cust_estverintchannelsky_orec_wfmse", 
      "cust_estverintchannelsky_orec_solndesign", "cust_estverintchannelsky_orec_psesi", "cust_estverintchannelsky_orec_trainvln", 
      "cust_estverintchannelsky_orec_trainadtech", "cust_estverintchannelsky_orec_appconsulting",
      2, 3, 0, 0.5, 1.5, 2, 0, 0 ],
	[ "cust_estverintchannelverint_owfm_pm", "cust_estverintchannelverint_owfm_se", "cust_estverintchannelverint_owfm_wfmse",
      "cust_estverintchannelverint_owfm_solndesign", "cust_estverintchannelverint_owfm_psesi", "cust_estverintchannelverint_owfm_trainvln",
      "cust_estverintchannelverint_owfm_trainadtech", "cust_estverintchannelverint_owfm_appconsulting",
      3, 0, 4, 2, 2, 0, 9, 0 ],
	[ "cust_estverintchannelsky_owfm_pm", "cust_estverintchannelsky_owfm_se", "cust_estverintchannelsky_owfm_wfmse",
      "cust_estverintchannelsky_owfm_solndesign", "cust_estverintchannelsky_owfm_psesi", "cust_estverintchannelsky_owfm_trainvln",
      "cust_estverintchannelsky_owfm_trainadtech", "cust_estverintchannelsky_owfm_appconsulting",
      1, 0, 4, 1, 1.5, 0, 9, 0 ],
	[ "cust_estverintchannelverint_owfo_pm", "cust_estverintchannelverint_owfo_se", "cust_estverintchannelverint_owfo_wfmse",
      "cust_estverintchannelverint_owfo_solndesign", "cust_estverintchannelverint_owfo_psesi", "cust_estverintchannelverint_owfo_trainvln",
      "cust_estverintchannelverint_owfo_trainadtech", "cust_estverintchannelverint_owfo_appconsulting",
      5, 8, 5, 2.5, 3.5, 5, 9, 0 ],
	[ "cust_estverintchannelsky_owfo_pm", "cust_estverintchannelsky_owfo_se", "cust_estverintchannelsky_owfo_wfmse",
      "cust_estverintchannelsky_owfo_solndesign", "cust_estverintchannelsky_owfo_psesi", "cust_estverintchannelsky_owfo_trainvln",
      "cust_estverintchannelsky_owfo_trainadtech", "cust_estverintchannelsky_owfo_appconsulting",
      2, 2, 5, 2, 3, 5, 9, 0 ],
	[ "cust_estverintdirectverint_oqm_pm", "cust_estverintdirectverint_oqm_se", "cust_estverintdirectverint_oqm_wfmse",
      "cust_estverintdirectverint_oqm_solndesign", "cust_estverintdirectverint_oqm_psesi", "cust_estverintdirectverint_oqm_trainvln",
      "cust_estverintdirectverint_oqm_trainadtech", "cust_estverintdirectverint_oqm_appconsulting",
      6, 8, 1, 0.5, 3, 5, 1, 2 ],
	[ "cust_estverintdirectsky_oqm_pm", "cust_estverintdirectsky_oqm_se", "cust_estverintdirectsky_oqm_wfmse",
      "cust_estverintdirectsky_oqm_solndesign", "cust_estverintdirectsky_oqm_psesi", "cust_estverintdirectsky_oqm_trainvln",
      "cust_estverintdirectsky_oqm_trainadtech", "cust_estverintdirectsky_oqm_appconsulting",
      4, 4, 1, 0.5, 1.5, 5, 1, 0 ],
	[ "cust_estverintdirectverint_orec_pm", "cust_estverintdirectverint_orec_se", "cust_estverintdirectverint_orec_wfmse",
      "cust_estverintdirectverint_orec_solndesign", "cust_estverintdirectverint_orec_psesi", "cust_estverintdirectverint_orec_trainvln",
      "cust_estverintdirectverint_orec_trainadtech", "cust_estverintdirectverint_orec_appconsulting",
      5, 4, 0, 0.5, 2, 2, 0, 2 ],
	[ "cust_estverintdirectsky_orec_pm", "cust_estverintdirectsky_orec_se", "cust_estverintdirectsky_orec_wfmse",
      "cust_estverintdirectsky_orec_solndesign", "cust_estverintdirectsky_orec_psesi", "cust_estverintdirectsky_orec_trainvln",
      "cust_estverintdirectsky_orec_trainadtech", "cust_estverintdirectsky_orec_appconsulting",
      3, 3, 0, 0.5, 1.5, 2, 0, 0 ],
	[ "cust_estverintdirectverint_owfm_pm", "cust_estverintdirectverint_owfm_se", "cust_estverintdirectverint_owfm_wfmse",
      "cust_estverintdirectverint_owfm_solndesign", "cust_estverintdirectverint_owfm_psesi", "cust_estverintdirectverint_owfm_trainvln",
      "cust_estverintdirectverint_owfm_trainadtech", "cust_estverintdirectverint_owfm_appconsulting",
      5, 0, 4, 2, 2, 0, 9, 0 ],
	[ "cust_estverintdirectsky_owfm_pm", "cust_estverintdirectsky_owfm_se", "cust_estverintdirectsky_owfm_wfmse",
      "cust_estverintdirectsky_owfm_solndesign", "cust_estverintdirectsky_owfm_psesi", "cust_estverintdirectsky_owfm_trainvln",
      "cust_estverintdirectsky_owfm_trainadtech", "cust_estverintdirectsky_owfm_appconsulting",
      2, 0, 4, 1, 1.5, 0, 9, 0 ],
	[ "cust_estverintdirectverint_owfo_pm", "cust_estverintdirectverint_owfo_se", "cust_estverintdirectverint_owfo_wfmse",
      "cust_estverintdirectverint_owfo_solndesign", "cust_estverintdirectverint_owfo_psesi", "cust_estverintdirectverint_owfo_trainvln",
      "cust_estverintdirectverint_owfo_trainadtech", "cust_estverintdirectverint_owfo_appconsulting",
      7, 8, 5, 2.5, 3.5, 5, 9, 6 ],
	[ "cust_estverintdirectsky_owfo_pm", "cust_estverintdirectsky_owfo_se", "cust_estverintdirectsky_owfo_wfmse",
      "cust_estverintdirectsky_owfo_solndesign", "cust_estverintdirectsky_owfo_psesi", "cust_estverintdirectsky_owfo_trainvln",
      "cust_estverintdirectsky_owfo_trainadtech", "cust_estverintdirectsky_owfo_appconsulting",
      3, 2, 5, 2, 2, 5, 9, 0 ]
	];
var DebugModeProject = false;  
/* var DebugModeProjectII = true;  */
/***************************************************************************************/
/*  To enable or disable data fields in the Estimated  Section 
    Call IsAuthorizedForTeams() to determine whether the current user belongs to a 
		certain user group
*/
function EnableEstiamted( show_me )
{
	try
	{
		var toDisable = ( IsAuthorizedForTeams( ['Service Mgmt'] ) == true ) ? false : true;
		
		if( DebugModeProject )  
			window.alert( "function EnableEstiamted\nshow_me = " + show_me.toString() + "\ntoDisable = " + toDisable.toString());
		
		show_me -= 11;
		for( var i = 0; i < 8; i++ )
			mySetDisabled( gdf[ show_me ][ i ], toDisable );
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function EnableEstiamted error code " + err );
	}
}

/***************************************************************************************/
/*  To set default values, if all 8 values are null 
*/
function ToSetDefault( show_me )
{
	try
	{
		var toSet = true;
		
		if( DebugModeProject ) 
			window.alert( "function ToSetDefault\nshow_me = " + show_me.toString());
		
		show_me -= 11;
		for( var i = 0; i < 8 && toSet == false; i++ )
			if( myGetValue( gdf[ show_me ][ i ] ) != null )
				toSet = false;
		if( toSet == true )
			for( var j = 0; j < 8; j++ )
				mySetValue( gdf[ show_me ][ j ], gdf[ show_me ][ j + 8 ] );
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function ToSetDefault error code " + err );
	}
}

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
				{
					ToSetDefault( i );
					EnableEstiamted( i );
					ShowOneTab( "tab_" + i.toString());
				}	
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
function Project_Tabs_Update()
{
	if( DebugModeProject ) 
		window.alert( "function Project_Tabs_Update" );
		
	try
	{
		var p = myGetValue( "cust_partner" );
		var t = myGetValue( "cust_productinterest" );
		if( DebugModeProject ) window.alert( "function Project_Tabs_Update\n\tcust_partner, p = " + p + "\n\tcust_productinterest, t = " + t );
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
		if( DebugModeProject ) window.alert( "function Project_Tabs_Update error code " + err );
	}
}

/***************************************************************************************/
function Partner_OnChange()
{
	if( DebugModeProject ) window.alert( "function Partner_OnChange" );
	try
	{
		Project_Tabs_Update();
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
		Project_Tabs_Update();
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function ProductInterest_OnChange error code " + err );
	}
}

/***************************************************************************************/
/*  To enable or disable the Order Status Tab 
    Call IsAuthorizedForTeams() to determine whether the current user belongs to 
		accessible or not? read-only user group? read-write user group?		
*/
function EnableOrderStatusTab()
{
	try
	{
		if( DebugModeProject )  
			window.alert( "function EnableOrderStatusTab" );
		var user_r = IsAuthorizedForTeams( ['Project Order Status - R'] );
		var user_rw = IsAuthorizedForTeams( ['Project Order Status - RW'] );
		
		if( user_r != true && user_rw != true )
			HideOneTab( 'tab_OrderStatus' );
		else 
		{
			ShowOneTab( 'tab_OrderStatus' );
			var osf = [ "new_orderstatus", "new_adtechpotoverint", "new_adtechordersubmitdate", "new_verintso", "new_ordercompletiondate" ]; 
			for( var i = 0; i < 5; i++ )
				mySetDisabled( osf[ i ], user_rw ? false : true );
		}	
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function EnableOrderStatusTab error code " + err );
	}
}

/***************************************************************************************/
function ProjectForm_OnLoad()
{
	if( DebugModeProject ) window.alert( "function ProjectForm_OnLoad" );
	try
	{
		Project_Tabs_Update();
		EnableOrderStatusTab();
	}
	catch( err )
	{
		if( DebugModeProject ) window.alert( "function ProjectForm_OnLoad error code " + err );
	}
}


/* End Of Lines ************************************************************************/
