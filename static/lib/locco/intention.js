// Generated by CoffeeScript 1.6.3
/*
    Intention
    Data
    Action
    Document
    Workflow
    Interface
    Actor
    Reserve
    Prototype
*/


(function() {
  var previousRequire, require, resolve, use_cache;

  if ((typeof window !== "undefined" && window !== null) && (window.Locco == null)) {
    window.modules = {
      locco: window[window.exports != null ? "exports" : "Locco"] = {}
    };
    if (!($ && $.ajax)) {
      if (window.require == null) {
        window.require = function() {
          return window.exports;
        };
      }
      return;
    }
    previousRequire = window.require;
    use_cache = true;
    window.require = require = function(modulename, filename, options) {
      var cachedModule, result, _previousExports, _previous_use_cache;
      if (arguments.length === 2 && Object.prototype.toString.apply(filename !== '[object String]')) {
        options = filename;
        filename = null;
      }
      if (filename == null) {
        filename = modulename;
      }
      filename = resolve(filename);
      if ((options != null ? options.use_cache : void 0) != null) {
        _previous_use_cache = use_cache;
        use_cache = options.use_cache;
      }
      result = typeof previousRequire === "function" ? previousRequire(filename) : void 0;
      if (result != null) {
        return result;
      }
      if (use_cache) {
        cachedModule = window.modules[filename];
        if (cachedModule != null) {
          return cachedModule;
        }
      }
      _previousExports = window.exports;
      window.exports = {};
      $.ajax({
        url: '/static/lib/' + filename + '.js',
        async: false,
        cache: true,
        error: function(type, xhr, settings) {
          return alert('Error: ' + xhr.status);
        },
        dataType: 'script'
      });
      result = window.modules[filename] = window.exports;
      window.exports = _previousExports;
      if ((options != null ? options.use_cache : void 0) != null) {
        use_cache = _previous_use_cache;
      }
      return result;
    };
    window.require.resolve = resolve = function(filename) {
      var i;
      filename = filename.toLowerCase().replace(/^\.\//, '').replace(/\.\.\//g, '').replace(/^general\//, '').replace(/^client\//, '');
      return filename = (i = filename.lastIndexOf('.')) >= 0 ? filename.slice(0, i) : filename;
    };
    window.require.cache = function(used) {
      return use_cache = used;
    };
  }

}).call(this);
