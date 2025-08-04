import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/src/lib/prisma'

// PUT /api/tasks/[id] - Actualizar una tarea
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json()
    const { title, description, completed } = body

    const task = await prisma.task.update({
      where: {
        id: params.id
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
  { params }: { params: { id: string } }
) {
  try {
    await prisma.task.delete({
      where: {
        id: params.id
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