import unittest
import snakestats

class TestsForSnakeStats(unittest.TestCase):
    def test_mean(self):
        res = snakestats.mean([1,2,3])
        self.assertEqual(res, 2.0)

    def test_mean_2_values(self):
        res = snakestats.mean([1,2])
        self.assertEqual(res, 1.5)

    def test_mean_empty_list(self):
        with self.assertRaises(ValueError):
            snakestats.mean([])

    def test_getMax(self):
        theMax = snakestats.getMax([6,5,4,3,2,1])
        self.assertEqual(theMax, 6)

    def test_getMaxLast(self):
        theMax = snakestats.getMax([6,5,4,3,2,7])
        self.assertEqual(theMax, 7)
    
    def test_getMaxAllNegative(self):
        theMax = snakestats.getMax([-6, -5, -4, -3, -2, -7])
        self.assertEqual(theMax, -2)

    def test_getMaxEmptyList(self):
        with self.assertRaises(ValueError):
            snakestats.getMax([])


unittest.main(argv=['ignored', '-v'], exit=False)
