-- The query must rank each clan by their total_points, you must return each unqiue clan and
-- if there is no clan name (i.e. it's an empty string) you must replace it with [no clan specified],
-- you must sum the total_points for each clan and the total_people within that clan.
WITH q1 AS (
  SELECT clan,
         SUM(points) AS total_points
  FROM people
  GROUP BY clan
), q2 AS (
  SELECT clan,
         COUNT(id) AS total_people
  FROM people
  GROUP BY clan
)
SELECT RANK() OVER(ORDER BY total_points DESC) AS rank,
       CASE WHEN q1.clan = ''
       THEN '[no clan specified]'
       ELSE q1.clan END AS clan,
       q1.total_points,
       q2.total_people
FROM q1 INNER JOIN q2 ON q1.clan = q2.clan

-- Your task is to add up letters to one letter.
-- The function will be given a variable amount of arguments, each one being a letter to add.
WITH q1 AS (
  SELECT SUM(STRPOS('abcdefghijklmnopqrstuvwxyz', letter)) AS lsum
  FROM letters
),
q2 AS (
  SELECT
    CASE WHEN lsum <= 26 THEN lsum
    ELSE lsum - (FLOOR(lsum/26) * 26) END AS lpos_wrapped
  FROM q1
)
SELECT CASE WHEN lpos_wrapped IS NOT NULL
    THEN SUBSTRING('abcdefghijklmnopqrstuvwxyz', CAST(lpos_wrapped AS INT), 1)
  ELSE 'z'
  END AS letter
FROM q2
