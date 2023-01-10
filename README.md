

# Go to the discussions forum at https://github.com/wustlcse/FAQ/discussions
# Or the flat wiki view at https://faq.cse.wustl.edu (or https://wustlcse.github.io/FAQ/)
# Details on how to use, curate, and the internals are at https://faq.cse.wustl.edu/details


## Files

* `docs/_includes/faq-header.html`  Header banner bar and links.  Update this to rearranged top menu. Based on https://cse.wustl.edu/.  Includes the `About Us` block. 
* `docs/_includes/cse-head.html` Page header.  Based on https://cse.wustl.edu/. 
* `docs/_layouts/cse-page.html` Overall page structure.  `index.md` is placed in `{{content}}`.  Includes the `faq-header` and JavaScript (for accordions and header behavior)
* `docs/assets/*`: Various assets directly from https://cse.wustl.edu/
  * `docs/assets/js/frontend-min.js`:  Updated `frontend.js` with WordPress (.wp.) references and other error-causing code removed.  (Removed by: deminify, edit and comment/replace potentially unneeded items, testing with non-min version, then re-minifying)
  * `docs/assets/js/nojq-min.js`: Errors causing code removed (as above).
  * `docs/assets/faq.scss` SASS style specific to this FAQ. In particular, adjusts spacing of the Index section and padding around items. (Refer to [`updateMetaPage.py`](https://github.com/wustlcse/FAQMeta/blob/main/updateMetaPage.py) for specific classes used)
* `docs/index.md` Generated contents for the FAQ.
