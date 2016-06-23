# NW Fonts Rendering Bug

* Affected nwjs versions: 0.14.x and 0.15.x (tested)
* Affected os: win7, os x 10.11.5 (tested)
* Possible bug in nwjs / chromium: nwjs


## Bug Description:

Site uses custom fonts via @font-face.

Set custom font to h1 and h2, hide h2.

Open a window with css that has the same @font-face declarations.
> frame:false or true 

Show h2, h2 text won't be visible unless you toggle some css in devtools.


## Reproduction:

1. Clone this repository
2. run this project as nwapp in nw 0.14.x or nwjs 0.15.x (mac or win)


## Related bugs:

Maybe it's related to *NSWindow warning: adding an unknown subview*

    nwjs[1846:3691930] NSWindow warning: adding an unknown subview: <WebContentsViewCocoa: 0x7ff164e47c70>. Break on NSLog to debug.
    nwjs[1846:3691930] Call stack:
    (
    	0   AppKit                              0x00007fff9cb1c7b7 -[NSThemeFrame addSubview:] + 107
    	1   nwjs Framework                      0x0000000109926d73 _ZN2v88UnlockerD1Ev + 20413539
    	2   nwjs Framework                      0x00000001099265fc _ZN2v88UnlockerD1Ev + 20411628
    	3   nwjs Framework                      0x000000010992576a _ZN2v88UnlockerD1Ev + 20407898
    	4   nwjs Framework                      0x000000010a411e12 _ZN2v88UnlockerD1Ev + 31862018
    	5   nwjs Framework                      0x000000010a360719 _ZN2v88UnlockerD1Ev + 31135241
    	6   nwjs Framework                      0x000000010a42ea31 _ZN2v88UnlockerD1Ev + 31979809
    	7   nwjs Framework                      0x000000010a43080f _ZN2v88UnlockerD1Ev + 31987455
    	8   nwjs Framework                      0x000000010a430aa8 _ZN2v88UnlockerD1Ev + 31988120
    	9   nwjs Framework                      0x000000010a448ccc _ZN2v88UnlockerD1Ev + 32086972
    	10  nwjs Framework                      0x000000010a620202 _ZN2v88UnlockerD1Ev + 34017522
    	11  nwjs Framework                      0x0000000109f57024 _ZN2v88UnlockerD1Ev + 26902292
    	12  nwjs Framework                      0x0000000109d40e83 _ZN2v88UnlockerD1Ev + 24714611
    	13  nwjs Framework                      0x0000000109e84269 _ZN2v88UnlockerD1Ev + 26038617
    	14  nwjs Framework                      0x0000000107766408 ChromeMain + 15878584
    	15  nwjs Framework                      0x0000000106cfeb3b ChromeMain + 4968683
    	16  nwjs Framework                      0x0000000106d20c63 ChromeMain + 5108243
    	17  nwjs Framework                      0x0000000106d20f3c ChromeMain + 5108972
    	18  nwjs Framework                      0x0000000106d2112b ChromeMain + 5109467
    	19  nwjs Framework                      0x0000000106cf31c1 ChromeMain + 4921201
    	20  nwjs Framework                      0x0000000106d1728a ChromeMain + 5068858
    	21  nwjs Framework                      0x0000000106cf2bc4 ChromeMain + 4919668
    	22  CoreFoundation                      0x00007fff94236881 __CFRUNLOOP_IS_CALLING_OUT_TO_A_SOURCE0_PERFORM_FUNCTION__ + 17
    	23  CoreFoundation                      0x00007fff94215fbc __CFRunLoopDoSources0 + 556
    	24  CoreFoundation                      0x00007fff942154df __CFRunLoopRun + 927
    	25  CoreFoundation                      0x00007fff94214ed8 CFRunLoopRunSpecific + 296
    	26  HIToolbox                           0x00007fff9bc29935 RunCurrentEventLoopInMode + 235
    	27  HIToolbox                           0x00007fff9bc2976f ReceiveNextEventCommon + 432
    	28  HIToolbox                           0x00007fff9bc295af _BlockUntilNextEventMatchingListInModeWithFilter + 71
    	29  AppKit                              0x00007fff9cb01df6 _DPSNextEvent + 1067
    	30  AppKit                              0x00007fff9cb01226 -[NSApplication _nextEventMatchingEventMask:untilDate:inMode:dequeue:] + 454
    	31  AppKit                              0x00007fff9caf5d80 -[NSApplication run] + 682
    	32  nwjs Framework                      0x0000000106cf3956 ChromeMain + 4923142
    	33  nwjs Framework                      0x0000000106cf3014 ChromeMain + 4920772
    	34  nwjs Framework                      0x0000000106d36673 ChromeMain + 5196835
    	35  nwjs Framework                      0x00000001068ca078 ChromeMain + 558632
    	36  nwjs Framework                      0x0000000109c8d817 _ZN2v88UnlockerD1Ev + 23979783
    	37  nwjs Framework                      0x0000000109c8fde2 _ZN2v88UnlockerD1Ev + 23989458
    	38  nwjs Framework                      0x0000000109c8962d _ZN2v88UnlockerD1Ev + 23962909
    	39  nwjs Framework                      0x0000000106cb4f08 ChromeMain + 4666552
    	40  nwjs Framework                      0x0000000106cb43b6 ChromeMain + 4663654
    	41  nwjs Framework                      0x0000000106841a92 ChromeMain + 66
    	42  nwjs                                0x00000001065dad52 main + 530
    	43  nwjs                                0x00000001065dab34 nwjs + 2868
    	44  ???                                 0x0000000000000002 0x0 + 2
    )
