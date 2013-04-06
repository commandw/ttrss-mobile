/* My module for this webapp templates */

define(['underscore'], function(_){

  return {

    // a jQuery listview separator element
    listSeparatorTpl : 
      _.template('<li data-role="list-divider"><%= text %></li>')
    ,

    // a jQuery listview link element (to put inside a li)
    listElementTpl : 
      _.template('<a href="<%= href %>">' +
                 '<%= title %>' +
                 '<span class="ui-li-count"><%= count %></span>' +
                 '</a>'),

    // a jQuery listview link element with icon (to put inside a li)
    listElementWithIconTpl : 
      _.template('<a href="<%= href %>">' +
                 '<img src="<%= src %>" class="ui-li-icon"></img>' +
                 '<%= title %>' +
                 '<span class="ui-li-count"><%= count %></span>' +
                 '</a>'),
                                  
    // a jQuery listview read-only element
    roListElementTpl : 
      _.template('<li class="ui-li-static"><%= text %></li>'),

    // the content of a LI element for an article
    articleLiElementTpl : 
      _.template('<a href="<%= href %>">' +
      '<h3><%= title %></h3>' +
      '<p class="ui-li-desc"><%= date %></p></a>'),

    // the content of a LI element for an article with the feed Name
    articleFeedLiElementTpl : 
      _.template(
        '<a href="<%= href %>">' +
        '<h3><%= title %></h3>' +
        '<p class="ul-li-desc"><strong><%= feed %></strong></p>' +
        '<p class="ui-li-desc"><%= date %></p></a>'
      ),

    // the content of a LI element for a read article
    articleReadLiElementTpl : 
      _.template('<a href="<%= href %>">' +
                 '<h3><%= title %></h3>' +
                 '<p class="ui-li-desc"><%= date %>' +
                 '&nbsp;&ndash;&nbsp;<em>already read</em>' +
                 '</p></a>'),

    // the content of a LI element for a read article with the feed Name
    articleReadFeedLiElementTpl : 
      _.template(
        '<a href="<%= href %>">' +
        '<h3><%= title %></h3>' +
        '<p class="ul-li-desc"><strong><%= feed %>' +
        '</strong></p><p class="ui-li-desc"><%= date %>' +
        '&nbsp;&ndash;&nbsp;<em>already read</em></p></a>'),

    // the content of the content DIV when an article is loading
    articleLoadingTpl : 
      _.template('<h3><%= msg %></h3>'),

    // the header content for an article page
    articleTitleTpl : 
      _.template(
        '<h3><a href="<%= href %>" target="_blank"><%= title %></a>'+
        '</h3><p class="feed">Feed: <%= feed %></p>' +
        '<p class="updateTime"><%= update %><time><%= time %>' +
        '</time></p>'),

    // button for the prev/next
    gridLeftButtonTpl : 
      _.template(
        '<div class="ui-grid-a">' +
        '<div class="ui-block-a">' +
        '<a data-role="button" data-icon="arrow-l" href="<%= href %>" class="<%= cl %>">previous</a>' +
        '<em><%= title %></em></div>'),

    gridRightButtonTpl : 
      _.template(
        '<div class="ui-block-b">' +
        '<a data-role="button" data-icon="arrow-r" ' +
        'data-iconpos="right" href="<%= href %>" class="<%= cl %>"' +
        '>next</a><em><%= title %></em></div>' +
        '</div>')

  } //return

}); //define
