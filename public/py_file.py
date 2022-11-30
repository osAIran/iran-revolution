

import os
os.chdir('assets')

# Path: public/assets/py_file.py

li = []
for file in os.listdir():
    if os.path.isdir(file):
        for subfile in os.listdir(file):
            # print(f"assets/{file}/{subfile}")
            li += [f"assets/{file}/{subfile}"]

txt = ""
print("[ ")
txt += "[ "

for item in li :
    print(item)
    print(",")
    txt += f"\"{item}\", \n"


print("]")        
txt += "]"

with open("list.txt", "w") as f:
    f.write(txt)