<?php
if (!ACF_NESTED) {
    $flexibleContentPath = get_template_directory() . './flexible-content';
    if (have_rows('layout_builder')) :
        while (have_rows('layout_builder')) :
            the_row();
            $layout = get_row_layout();

            $page_builder = get_sub_field('page_builder');

            $file = ($flexibleContentPath . str_replace('_', '-', $layout)  . '.php');
        endwhile;
    endif;
} else {
    include(get_template_directory() . './acf-generate-page.php');
}
