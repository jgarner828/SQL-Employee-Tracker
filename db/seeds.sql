INSERT INTO department (name)
VALUES  ('HR'),
        ('FRONT OFFICE'),
        ('ENGINEERING'),
        ('FINANCE'),
        ('SALES');
       


INSERT INTO role (title, salary, department_id)
VALUES  ("HR Director", 100000, 1),
        ("HR employee", 40000, 1),

        ("Front Office Director", 120000, 2),
        ("Front Office employee", 40000, 2),

        ("Engineering Director", 120000, 3),
        ("Engineering employee", 40000, 3),

        ("Finance Director", 120000, 4),
        ("Finance employee", 40000, 4),

        ("Sales Director", 140000, 5),
        ("Sales employee", 40000, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES  ("John", "Smith", 1, NULL),
        ("Frank", "Potatoes", 2, 1),

        ("Sarah", "Mcloud", 3, NULL),
        ("Kyle", "Slinskly", 4, 3),

        ("Stephen", "Willant", 5, NULL),
        ("Mike", "Abernathy", 6, 5),

        ("Darth", "Vader", 7, NULL),
        ("Abraham", "Winch", 8, 7),

        ("Kathy", "Grape", 9, NULL),
        ("Todd", "Thebod", 10, 9);

        


       

