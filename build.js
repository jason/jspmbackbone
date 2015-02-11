"format register";

System.register("dist/js/main", [], false, function(__require, __exports, __module) {
  System.get("@@global-helpers").prepareGlobal(__module.id, []);
  (function() {
    console.log('hello world');
  }).call(System.global);
  return System.get("@@global-helpers").retrieveGlobal(__module.id, false);
});



//# sourceMappingURL=build.js.map