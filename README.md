# YAML TO STRINGS

### Description

    This command line application helps you to convert yaml files in the strings files for iOS translations

### Install

    Run `npm install`

### Usage

    Lets see whats happens if we have this sample file:

    ```yml
        en:
            screen1:
                title: "Title"
                backBtn: "< back"
                loginBtn: "Login"
                description: "In friendship diminution instrument so. \n Son sure paid door with say them. Two among sir sorry men court. \n Estimable ye situation suspicion he delighted an happiness discovery. \n Fact are size cold why had part.\n"
    ```

    We run `npm start ./randomInput.yml` and we get:

    ```
        "en.screen1.title" = "Title"

        "en.screen1.backBtn" = "< back"

        "en.screen1.loginBtn" = "Login"

        "en.screen1.description" = "In friendship diminution instrument so. \n Son sure paid door with say them. Two among sir sorry men court. \n Estimable ye situation suspicion he delighted an happiness discovery. \n Fact are size cold why had part.\n"

    ```

### More advanced usage

    We can run `npm start ./randomInput.yml en <key1> <key2>` and we get: 

    ```
        "screen1.title" = "Title"

        "screen1.backBtn" = "< back"

        "screen1.loginBtn" = "Login"

        "screen1.description" = "In friendship diminution instrument so. \n Son sure paid door with say them. Two among sir sorry men court. \n Estimable ye situation suspicion he delighted an happiness discovery. \n Fact are size cold why had part.\n"
    ```

    The first argument is the input file and the rest ar keys if you if want to make your identifier short.


### NOTE 

    Don't use an input file with blanks lines in between your keys. Sometimes it theows an exeption.