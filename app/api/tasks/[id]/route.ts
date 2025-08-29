import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/src/lib/prisma-dev'

// PUT /api/tasks/[id] - Actualizar una tarea
export async function PUT(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const body = await request.json()
    const { title, description, completed } = body
    const { id } = await context.params

    const task = await prisma.task.update({
      where: {
        id: id
      },
      data: {
        title,
        description,
        completed
      }
    })

    return NextResponse.json(task)
  } catch (error) {
    console.error('Error al actualizar tarea:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
}

// DELETE /api/tasks/[id] - Eliminar una tarea
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params
    await prisma.task.delete({
      where: {
        id: id
      }
    })

    return NextResponse.json({ message: 'Tarea eliminada correctamente' })
  } catch (error) {
    console.error('Error al eliminar tarea:', error)
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    )
  }
} 