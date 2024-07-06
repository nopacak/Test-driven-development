#include <cppunit/TestCase.h>
#include <cppunit/TestCaller.h>
#include <cppunit/ui/text/TestRunner.h>
#include "src/physics.h"

class FixtureTests : public CppUnit::TestFixture
{
    public:
        void setUp() override
        {
        }

        void tearDown() override
        {
        }

        void testAddition()
        {
            CPPUNIT_ASSERT(2+3 == 5);
            CPPUNIT_ASSERT(2+3 == 5);
        }

        void testThingPosition()
        {
            Thing thing{5.0f, 10.0f, 1.0f};
            CPPUNIT_ASSERT(thing.getX() == 5.0f);
        }

        void testThingStartsStill()
        {
            Thing thing{5.0f, 10.0f, 1.0f};
            thing.update();
            CPPUNIT_ASSERT(thing.getX() == 5.0f);
        }

        void testThingMoves()
        {
            Thing thing{5.0f, 10.0f, 1.0f};
            thing.applyForce(1, 1);
            thing.update();
            // we'll assume a simple force model
            // where applying a force means it
            // adds that dX each time we update
            CPPUNIT_ASSERT(thing.getX() == 6.0f);
        }


};

int main()
{
    CppUnit::TextUi::TestRunner runner{};
    
    runner.addTest(new CppUnit::TestCaller<FixtureTests>
    {
        "test the addition operator",
        &FixtureTests::testAddition
    });

    runner.addTest(new CppUnit::TestCaller<FixtureTests>
    {
        "test the thing position is correct",
        &FixtureTests::testThingPosition
    });

    runner.addTest(new CppUnit::TestCaller<FixtureTests>
    {
        "test starts still",
        &FixtureTests::testThingStartsStill
    });

    runner.addTest(new CppUnit::TestCaller<FixtureTests>
    {
        "test force",
        &FixtureTests::testThingMoves
    });


    runner.run();
    return 0;
}
