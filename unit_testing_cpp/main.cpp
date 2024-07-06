#include <cppunit/TestCase.h>
#include <cppunit/TestCaller.h>
#include <cppunit/ui/text/TestRunner.h>


// class BasicTest : public CppUnit::TestCase {
//     public:
//     BasicTest(std::string name) : CppUnit::TestCase(name) {}

//     void runTest() override
//     {
//         CPPUNIT_ASSERT(2+2==4);
//         CPPUNIT_ASSERT(2+2==3);
//     }
// };

// int main()
// {
//     BasicTest test{"BasicTest"};
//     test.runTest();
// }


class FixtureTests : public CppUnit::TestFixture
{
    public:

    void setUp() override
    {
        printf("\n setUp is called \n");
    }

    void tearDown() override
    {
        printf("\n tearDown is called \n");
    }

    void testAddition()
    {
        CPPUNIT_ASSERT(2+2==3);
        CPPUNIT_ASSERT(2+2==4);
    }

    void testLogic()
    {
        CPPUNIT_ASSERT(true==false);
        CPPUNIT_ASSERT(false==false);
    }

};

int main()
{
    CppUnit::TextUi::TestRunner runner {};

    runner.addTest(new CppUnit::TestCaller<FixtureTests>{
        "test the addition operator",
        &FixtureTests::testAddition
    });

    runner.addTest(new CppUnit::TestCaller<FixtureTests>{
        "test the logic",
        &FixtureTests::testLogic
    });

    runner.run();
    return 0;
}
