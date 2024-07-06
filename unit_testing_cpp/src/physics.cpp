#include "physics.h"

// Thing constructor
Thing::Thing(float x, float y, float radius)
    : x{x}, y{y}, dX{0}, dY{0}
{
}
// end of Thing constructor

void Thing::setPosition(float x, float y)
{
}

float Thing::getX()
{
    return this->x;
}

float Thing::getY()
{
    return this->y;
}

void Thing::applyForce(float xForce, float yForce)
{
    x += xForce;
    y += yForce; 
}

void Thing::update()
{
    x += dX;
    y += dY;
}