(defproject cloverhfi "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-3211"]
                 [org.omcljs/om "0.8.8"]
                 [cljs-ajax "0.3.11"]
                 [sablono "0.3.4"]
                 [figwheel "0.2.6"]]

  :plugins [[lein-cljsbuild "1.0.5"]
            [lein-figwheel "0.2.6"]]

  :source-paths ["src" "target/classes"]

  :clean-targets ["out" "out-adv"]

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :main cloverhfi.core
                :output-to "out/cloverhfi.js"
                :output-dir "out"
                :optimizations :none
                :cache-analysis true
                :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :main cloverhfi.core
                :output-to "out-adv/cloverhfi.min.js"
                :output-dir "out-adv"
                :optimizations :advanced
                :externs ["js/papaparse.ext.js"]
                :pretty-print false}}]})
