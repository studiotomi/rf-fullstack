# Problem
For your new job you are receiving 2 data files on a daily basis. The first contains a list of accounts and the second contains a list of books associated with a particular account (see below). Define or describe a schema which would be convenient for storing and querying all of the information about accounts and the books associated with them.  

Example queries might include:
- all the accounts associated with a user
- all users associated with an account
- books associated with an account
- accounts associated with a book
    
# Accounts File
| Account ID | Name              | Created             | Closed              | Home Phone | Business Phone | Code  | Address           | City          | State | Zip        | Email 1                    | Email 2               | 
|------------|-------------------|---------------------|---------------------|------------|----------------|-------|-------------------|---------------|-------|------------|----------------------------|-----------------------| 
| 100000001  | JOHN SMITH        | 2016-01-28 00:00:00 |                     | 5121111111 | 5121111112     | 11001 | 11 WALL STREET    |  NEW YORK     |  NY   | 10005-8080 | smithjohn@example.com      | johnsmith@example.com | 
| 100000002  | JILL JACKSON | 2016-02-26 00:00:00 | 2016-07-08 00:00:00 | 5122222221 |                | 11002 | 350 FIFTH AVENUE  | NEW YORK      | NY    | 16429      | jill-jackson@example.com | N                      | 
| 100000003  | GUNTHER SCHMIDT   | 1991-12-03 00:00:00 |                     | 5123333331 |                | 11004 | 350 MCALLISTER ST | SAN FRANCISCO | CA    | 94102      | N                          | N                     | 
| 100000004  | GUNTHER SCHMIDT   | 2005-08-15 00:00:00 |                     | 5123333331 |                | 11004 | 350 MCALLISTER ST | SAN FRANCISCO | CA    | 94102      | N                          | N                     | 
| 100000004  | JANE SMITH        | 2016-01-28 00:00:00 |                     | 5124444441 | 5124444442     | 11005 | 11 WALL STREET    |  NEW YORK     |  NY   | 10005-8080 | smithjohn@no-gmail.com     | johnsmith@example.com | 

# Books File
| Account ID | Title                            | Author        | Genre       | Copyright Date      | Page Count | 
|------------|---------------------------------|---------------|-------------|---------------------|------------| 
| 100000001  | LAND OF THE LAST OAKS           | Margret Thads | Fiction     | 1988-07-18 00:00:00 | 125        | 
| 100000003  | BEGINERS GUIDE TO BLACKSMITHING | Jim Bentley   | How To      | 1998-07-23 00:00:00 | 423        | 
| 100000001  | JOURNEY OF THE LION             | Janet Indigo  | Educational | 2000-03-09 00:00:00 | 298        | 
| 100000004  | JOURNEY OF THE LION             | Janet Indigo  | Educational | 2000-03-09 00:00:00 | 298        | 
| 100000004  | A COLLECTION OF DEEP SEE FISH   | Sam Iverson   | Educational | 2010-05-04 00:00:00 | 603        | 
| 100000001  | THE BLUE WIND WILD              | James Hanson  | Fiction     | 2004-01-08 00:00:00 | 234        | 