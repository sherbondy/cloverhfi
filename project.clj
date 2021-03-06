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

  :clean-targets ["resources/public/out" "resources/public/out-adv"]

  :figwheel {
     :nrepl-port 7888
     :css-dirs ["css"]}

  :cljsbuild {
    :builds [{:id "dev"
              :source-paths ["src"]
              :compiler {
                :asset-path "out/"
                :main cloverhfi.core
                :output-to "resources/public/out/cloverhfi.js"
                :output-dir "resources/public/out"
                :optimizations :none
                :cache-analysis true
                :source-map true}}
             {:id "release"
              :source-paths ["src"]
              :compiler {
                :main cloverhfi.core
                :output-to "resources/public/out-adv/cloverhfi.min.js"
                :output-dir "resources/public/out-adv"
                :optimizations :advanced
                :externs ["resources/public/js/papaparse.ext.js"]
                :pretty-print false}}]})
