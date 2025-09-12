# Sprint 1: TypeScript CSV

### Task C: Proposing Enhancement

- #### Step 1: Brainstorm on your own.
Since the current code seems to be turning the csv fields into strings,
it could be frustrating if you are trying to have different types assigned
to numbers. Additionally, when writing numbers from the example provided,
sometimes a number could be spelled out instead of using numbers which may
not yield the results we want, so I wonder if there could be some kind of type
checking to ensure that fields stay consistent. Something that could be underspecified
is the fact that there could or could not be headings, which is important
to somehow clarify since those fields would not necessarily be data points as much
as identifiers. Lastly, I think there should be more clarity in how it actually 
parses the information since in some of my tests, I discovered that even if commas
were a part of a string that was a field, it would still seperate it instead
of keeping it as one field.

- #### Step 2: Use an LLM to help expand your perspective.
In my first prompt to Copilot, I copy and pasted the exact wording provided from
the handout just to get a sense of how the AI would respond to this kind of question.
The ideas it had were very similar to mine, such as ensuring that the parser had some
ability of detecting the types that the caller uses or also some kind of 
header support so that the user can specify whether or not they want the first
row to be titles for the columns. It also had some cases that I did not consider
yet, such as if a field spans multiple lines or how it would handle a skipped field,
meaning the column was incomplete. 

In my first edit to the prompt, I tried asking how I could make fixes and enhancements
using possible packages in Typescript. Since I knew that at some point we would want
to use Zod, I wanted to see what else it could possibly consider as useful implementations.
Whereas the first prompt categorized changes in terms of missing features to consider and 
potential edge cases, this edit now changed so that it categorized the packages and what
they can contribute, such as being core parsing enhancements, type safety and validation,
file handling & input flexibility, and testing and debugging. 

In my second edit, I specifically asked how to use Zod in this kind of parser and how 
Zod would be helpful. The difference now was that it specifically spoke on how
the previous categories could be improved on by Zod, such as with schema validation,
automatic type inference, and detailed error reporting.

- #### Step 3: use an LLM to help expand your perspective.

    Include a list of the top 4 enhancements or edge cases you think are most valuable to explore in the next week’s sprint. Label them clearly by category (extensibility vs. functionality), and include whether they came from you, the LLM, or both. Describe these using the User Story format—see below for a definition. 

    Functionality: As a user of the application, sometimes I might make mistakes and have data that contains blank lines/fields, and in that case, I would like to have a parser that would ensure that the data is 
    converted properly, whether it should treat it as undefined, leave a placeholder, or remove them completely. (A mix of my ideas and LLM, blank lines was mine and blank fields was LLM)
    
    Extensibility: Additionally, I would also want the ability to specify whether or not my data
    has headers to categorize my columns. As a user, I think it would be important for the parser to somehow clarify or prompt me to specify how my data is structured (My own idea)
    
    Extensibility: As a user, I would want my parser to be careful with my syntaxical errors, ensuring the types remain the same so that my data does not suddenly change in its meaning. This means that if a column was meant to be integers from my input, then the entire column should be the same type all throughout. (From an LLM + from my ideas)

    Functionality: As a user, I want the parser to properly read my data if it has embedded commas or quotes,
    ensuring that it will correctly handle quoted fields or escaped characters without breaking rows (My idea)


    Include your notes from above: what were your initial ideas, what did the LLM suggest, and how did the results differ by prompt? What resonated with you, and what didn’t? (3-5 sentences.) 
    
    I think my initial ideas were all the correct in concept, meaning that certain elements I would want to implement such as type checking or ensuring the headers were specified were along the same lines as the LLM. The LLM helped me specify from the broad generalizations I made by showing me that Zod could be helpful in aiding me type check for example. The results differed since everytime I tried to be more specific in my prompting for the LLM it gave more specific answers, which helped since it aided me in understanding how Zod would be useful for Typescript.


### Design Choices

### 1340 Supplement

- #### 1. Correctness

- #### 2. Random, On-Demand Generation

- #### 3. Overall experience, Bugs encountered and resolved
#### Errors/Bugs:
#### Tests:
#### How To…

#### Team members and contributions (include cs logins):
psromero: conceptually discussed the assingment
sjain80: conceptually discussed the assingment

#### Collaborators (cslogins of anyone you worked with on this project and/or generative AI):
#### Total estimated time it took to complete project:
#### Link to GitHub Repo:  
