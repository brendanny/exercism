-- Schema: CREATE TABLE "darts" ("x" REAL, "y" REAL, score INTEGER);
-- Task: update the darts table and set the score based on the x and y values.
update darts
set score = case
        when sqrt(power(x, 2) + power(y, 2)) <= 1 then 10
        when sqrt(power(x, 2) + power(y, 2)) <= 5 then 5
        when sqrt(power(x, 2) + power(y, 2)) <= 10 then 1
        else 0
    end;