<?php
$componentsDir = get_template_directory() . '/ACF/flexible-content/';

if (have_rows('page_builder')) :
    while (have_rows('page_builder')) :
        the_row();
        
        $layoutName = get_row_layout();
        $field = (object) get_row(true);
        
        $templatePath = $componentsDir . str_replace('_', '-', $layoutName) . '.php';

        if (is_readable($templatePath)) {
            include $templatePath;
        }

    endwhile;
endif;
