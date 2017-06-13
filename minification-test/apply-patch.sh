#!/bin/bash
# written against GNU patch 2.7.5
cd `dirname $0`
patch node_modules/ui-leaflet-draw/dist/ui-leaflet-draw.js fix.patch
echo "Patched"