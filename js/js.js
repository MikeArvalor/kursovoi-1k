<script type="text/javascript">
  function lifeSite() {
    var start = new Date('March 27, 2010'); 
    var end = new Date();
    var life = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    var suffix = new Array("день", "дня", "дней");
    var keys = [2, 0, 1, 1, 1, 2];
    var mod = life % 100;
    var suffix_key = mod > 4 && mod < 20 ? 2 : keys[Math.min(mod%10, 5)];
    document.getElementById("life_site").innerHTML = life + " " + suffix[suffix_key];
  }
</script>