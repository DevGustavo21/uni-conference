<?php 
$title = $field->hero_title;
?>

<section class="hero">
    <?php if(!empty($title)):?>
        <h1 class="hero-title"><?php echo $title?></h1>
    <?php endif?>
</section>