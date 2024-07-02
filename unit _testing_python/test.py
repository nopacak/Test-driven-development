import unittest

class TestSetForOneModule(unittest.TestCase):


    # Assert Equal (a = b)
    def test_assert_equal(self):
        self.assertEqual(10, 10)

    # Assert Not Equal (a != b)
    def test_assert_not_equal(self):
        self.assertNotEqual(12,10)

    # Assert True
    def test_assert_true(self):
        self.assertTrue(2 == 2)

    # Assert False
    def test_assert_false(self):
        self.assertFalse(2 == 4)

    # Assert Is
    def test_assert_is(self):
        a = 10
        b = a
        self.assertIs(a, b)

    # Assert Is Not
    def test_assert_is_not(self):
        a = 5
        b = a
        b = 14
        self.assertIsNot(a, b)

    # Assert Is None
    def test_assert_is_none(self):
        def do_not_return():
            x = 10
        self.assertIsNone(do_not_return())

    # Assert Is Not None
    def test_assert_is_not_none(self):
        x = 10
        self.assertIsNotNone(x)

    # Assert In
    def test_assert_in(self):
        a = [1,2,3,4,5,6,7,8,]
        self.assertIn(4, a)

    # Assert Not In
    def test_assert_not_in(self):
        a = [1,2,3,5,6,7,8,]
        self.assertNotIn(4, a)

    # Assert Is Instance
    def test_assert_is_instance(self):
        a = [4,5,6]
        self.assertIsInstance(a, list)

    # Assert Not Is Instance
    def test_assert_not_is_instance(self):
        a = 2
        self.assertNotIsInstance(a, list)
    



unittest.main(argv=['ignored', '-v'], exit=False)
