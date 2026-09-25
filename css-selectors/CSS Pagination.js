//In automation, instead of manually clicking, we identify the pagination element using a locator and perform the click automatically.
/*
 PAGINATION:

← Previous    1    2    3    4    Next →
               ↑
          Current Page


← Previous = Go backward one page

Next →      = Go forward one page

1,2,3,4     = Directly open a particular page

Current     = Page you are currently on

First page  = Previous should normally be disabled

Last page   = Next should normally be disabled

*/

/*
Website used: https://datatables.net/examples/core/basic_init/alt_pagination.html?utm_source=chatgpt.com
CSS selector: .dt-paging button:nth-of-type()
CSS selector for current active page: .dt-paging .dt-paging-button.current or .dt-paging button.dt-paging-button.current
*/