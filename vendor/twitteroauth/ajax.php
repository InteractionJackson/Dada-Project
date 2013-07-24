<?php
  session_start();
  require_once("twitteroauth.php"); //Path to twitteroauth library

  $search = $_POST["search"];
  $notweets = 5;
  $consumerkey = "n4EeukDvSIvOijW4OyA";
  $consumersecret = "fGUISWvW9sD0hPefKGfKRVrlf3k6QqVS90w9h9uI";
  $accesstoken = "1603845818-kKWYAuhVDwxnotNsBBIazShhXR330qJytQPBdQg";
  $accesstokensecret = "C6POzZOiLsuyxluFyZquBGCWdGZ6cYCmhvmbfa0UIE";
   
  function getConnectionWithAccessToken($cons_key, $cons_secret, $oauth_token, $oauth_token_secret) {
    $connection = new TwitterOAuth($cons_key, $cons_secret, $oauth_token, $oauth_token_secret);
    return $connection;
  }
   
  $connection = getConnectionWithAccessToken($consumerkey, $consumersecret, $accesstoken, $accesstokensecret);
   
  $tweets = $connection->get("https://api.twitter.com/1.1/search/tweets.json?q=%23".$search."&count=".$notweets);
   
  $decode = json_encode($tweets, true);

  echo $decode;
?>