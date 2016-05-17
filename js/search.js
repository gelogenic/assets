function parseQueryFromUrl() {
   var queryParamName = "q";
   var search = window.location.search.substr(1);
   var parts = search.split('&');
   for (var i = 0; i < parts.length; i++) {
     var keyvaluepair = parts[i].split('=');
     if (decodeURIComponent(keyvaluepair[0]) == queryParamName) {
       return decodeURIComponent(keyvaluepair[1].replace(/\+/g, ' '));
     }
   }
   return '';
}

google.load('search', '1', { language: 'en' });
google.setOnLoadCallback(function() {
   var prodSearchId = '004711181796222465330:bkyvav6_vhy';
   var customSearchControl = new google.search.CustomSearchControl(prodSearchId);
   customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
   customSearchControl.setLinkTarget(google.search.Search.LINK_TARGET_SELF);
   customSearchControl.setUserDefinedLabel({'web':'All Results', 'image':'Search images only'});
   var options = new google.search.DrawOptions();
   options.setAutoComplete(true);
   options.enableSearchResultsOnly();
   customSearchControl.draw('cse', options);
   var queryFromUrl = parseQueryFromUrl();
   if (queryFromUrl) {
      customSearchControl.execute(queryFromUrl);
	  $("input[id='search-text']").val(queryFromUrl);
   }
}, true);

  function getSearchText() {
   var searchText = "";
   if (document.getElementById('ikn-search-box') !== null) {
       searchText = document.getElementById('ikn-search-box').value;
   }
   if (searchText === "") {
       searchText = document.getElementById('search-text').value;
   }
   return searchText;
}

function search() {
   window.location = 'search.html?q=' + encodeURIComponent(getSearchText());
   return false;
}

$(window).load(function() {
    $(".gsc-tabsArea div div:first-child").text("All Results");
});


function inputFocus() {
	//document.getElementById('ikn-search-box').style['background'] = '';
}
function inputBlur() {
	var queryInput = document.getElementById('ikn-search-box');
}
function init() {
	google.search.CustomSearchControl.attachAutoCompletion('004711181796222465330:bkyvav6_vhy', document.getElementById('ikn-search-box'), 'two-page-form');
	inputBlur();
}
function submitQuery() {
	window.location = 'search.html?q=' + encodeURIComponent(document.getElementById('ikn-search-box').value);
	return false;
}
google.setOnLoadCallback(init);
