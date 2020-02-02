<?php 
$date_str = date('m-d-Y', time());
echo "Date: ".$date_str;
$date_raw = str_replace("-", "",$date_str);
$date_arr = str_split($date_raw);
$length = count($date_arr);
$mid = $length/2;
$start=0;
$end = $length-1;
while(1)
{   
  if($start<=$mid || $end>=$mid )
    {
      if($date_arr[$start] != $date_arr[$end])
          {
              echo "NOT PALINDROME !";
              break;
          }
      $start++;
      $end--;
    }
  echo "<br>";
  echo "Today ".$date_str." is -->Palindrome<-- !";
  break;
}
