+++
# See this link for more information: https://gohugo.io/content-management/front-matter/

title= '{{ replace .Name "-" " " | title }}'
date= {{ .Date }}

# Configurable stuff
draft= true
#author= "s4dr0t1"

# To Hide specific page being shown in home pages
# hiddenInHomelist = false

# Post description under title
description= ""

# Summary shown in list pages
summary= ""

slug= ""

# Disable comments
#comments = false

#To Hide meta elements: date, read-time, author and available-translations for page
#hidemeta = false

#ShowReadingTime = false
#showtoc = false
#tocopen = false
#hideSummary = false
#ShowWordCount = false

tags= [
    'tag1',
    'tag2'
]
#https://github.com/adityatelange/hugo-PaperMod/wiki/Features#post-cover-image
#[cover]
    #image = "url"
    #alt = ""
    #caption = ""
    #relative = false
    #responseImages = false
    #hidden = false


[editPost]
URL = "https://github.com/s4dr0t1/s4dr0t1.github.io/blob/main/content"
Text = "Suggest Changes"
appendFilePath = true
+++
