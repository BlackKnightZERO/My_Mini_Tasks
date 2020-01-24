function subsets($S,$L) {
    $a = $b = 0;
    $subset = [];
    $result = [];
    while ($a < count($S)) {
        $current = $S[$a++];
        $subset[] = $current;
        if (count($subset) == $L) {
            $result[] = json_encode($subset);
            array_pop($subset);
        }
        if ($a == count($S)) {
            $a = ++$b;
            $subset = [];
        }
    }
    return $result;
}



$S = ['1','2','3','4'];
$L = 2;


// L = 1 -> no need to do anything
print_r($S);

for ($i = 2; $i <= count($S); $i++)
    print_r(subsets($S,$i));

    
