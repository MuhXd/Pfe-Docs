# MapLib import
> this is to import a maplib you can pick between what maplib you would like to use
## This is the Open flood test lib loader
> [Click me to understand how to use and more details on it](/openfloodtest/OpenFloodTest)
```lua
local Lib = workspace.Multiplayer.GetMapVals:Invoke() --Has: Map, Script, Button, btnFuncs
Lib.Button:connect(function(p, bNo) if Lib.btnFuncs[bNo] then Lib.btnFuncs[bNo](bNo, p) end end)
```
## This is the PFE lib loader
> [Click me to understand how to use and more details on it](Pfe/Main.md)
```lua
local Lib = game.GetPfeLib:Invoke("Latest") --Has: Map, Script, Button, btnFuncs
Lib.Button:connect(function(p, bNo) if Lib.btnFuncs[bNo] then Lib.btnFuncs[bNo](bNo, p) end end)
```
