# vim cheat sheet.

## To insert mode

i: go to insert from Left of the cursor
a: go to insert from Right of the cursor
A: go to insert from End of the line
o: go end and return and go to insert
O: make empty line upper the cursor and insert there.
ciw: del cursor word and insert
ci[: del around cursor parent inner and insert

## insert mode commands
ctrl c: go to Normal mode
ctrl h: backspace
ctrl w: del a word before cursor
ctrl m: return
ctrl i: tab
ctrl o: Be able to use Normal cmd and back to insert.
ctrl t: tab whole line!
ctrl u: del from line head to cursor

ctrl x ctrl i: complete the word
ctrl x ctrl l: complete the line
ctrl x ctrl s: complete speLL?

## Normal mode commands
ctrl v: start rectangle slect mode.
    this can copy text without line num.
ctrl a: increment num on cursor
ctrl x: decrement num on cursor
ctrl d: down for half screen.
ctrl u: up for half screen.
ctrl e: scroll down screen 1 line.
ctrl y: scroll up screen 1 line.

### move cursor
gg: to the top
G: to the end

0: to the line top
^: to the indentted top
$: to the line end

+: to the top of the upper line
-: to the top of the lower line.

:30  go to the line 30.

e: to the word end
E: to the word end include 'word. word:'
(b,B,w,W are the same)

f'c': to the following char
F: back to the following char

%: to the parental.

ctrl o: back jumped point
ctrl i: forward jumped point

}: to the next paragraph
{: back to the last paragraph

## copy and paste
yy: copy one line
p: paste


