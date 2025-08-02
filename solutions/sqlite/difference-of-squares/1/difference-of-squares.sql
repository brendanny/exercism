-- Schema: CREATE TABLE "difference-of-squares" ("number" INT", property" TEXT, "result" INT);
-- Task: update the difference-of-squares table and set the result based on the number and property fields.
update "difference-of-squares"
set "result" = power("number" * ("number" + 1) / 2, 2)
where "property" = 'squareOfSum';
update "difference-of-squares"
set "result" = "number" * ("number" + 1) * (2 * "number" + 1) / 6
where "property" = 'sumOfSquares';
update "difference-of-squares"
set "result" = (
        select "SquareOfSum"."result" - "SumOfSquares"."result"
        from "difference-of-squares" as "SquareOfSum",
            "difference-of-squares" as "SumOfSquares"
        where "SquareOfSum"."number" = "difference-of-squares"."number"
            and "SumOfSquares"."number" = "difference-of-squares"."number"
            and "SquareOfSum"."property" = 'squareOfSum'
            and "SumOfSquares"."property" = 'sumOfSquares'
    )
where "property" = 'differenceOfSquares';
select *
from "difference-of-squares";