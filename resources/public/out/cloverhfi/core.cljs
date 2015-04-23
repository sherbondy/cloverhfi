(ns cloverhfi.core
  (:require [clojure.browser.repl :as repl]
            [figwheel.client :as fw]))

;; (repl/connect "http://localhost:9000/repl")

(enable-console-print!)

(println "Hello world!")

(fw/start {})